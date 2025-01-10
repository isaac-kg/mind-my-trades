import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore"
import { db } from "../../firebase-config"

export const firestoreApi = createApi({
  reducerPath: "firestoreApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Journals"],
  endpoints: (builder) => ({
    getDocuments: builder.query({
      queryFn: async (collectionName) => {
        try {
          const querySnapshot = await getDocs(collection(db, collectionName))
          const documents = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))

          return { data: documents }
        } catch (error) {
          return { error: error.message }
        }
      },
      providesTags: ["Journals"],
    }),
    addDocument: builder.mutation({
      queryFn: async ({ collectionName, data }) => {
        try {
          const docRef = await addDoc(collection(db, collectionName), data)
          return { data: { id: docRef.id, ...data } }
        } catch (error) {
          return { error: error.message }
        }
      },
      invalidatesTags: [{ type: "Journals" }],
    }),
    updateDocument: builder.mutation({
      queryFn: async ({ collectionName, docId, updatedData }) => {
        console.log("This is collecitonName: ", collectionName)
        console.log("This is docId: ", docId)
        console.log("This is updatedData: ", updatedData)
        try {
          const docRef = doc(db, collectionName, docId);
          console.log("docRef", docRef)
      
      // Attempt to update the document
      await updateDoc(docRef, updatedData);
          return { data: docId }
        } catch (error) {
          return { error: error.message }
        }
      },
      invalidatesTags: [{ type: "Journals" }],
    }),
    deleteDocument: builder.mutation({
      queryFn: async ({ collectionName, id }) => {
        try {
          await deleteDoc(doc(collection(db, collectionName), id))
          return { data: id }
        } catch (error) {
          return { error: error.message }
        }
      },
      invalidatesTags: [{ type: "Journals" }],
    }),
  }),
})

// Export hooks to use in your components
export const {
  useGetDocumentsQuery,
  useAddDocumentMutation,
  useUpdateDocumentMutation,
  useDeleteDocumentMutation,
} = firestoreApi
