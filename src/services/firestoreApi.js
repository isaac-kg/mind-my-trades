import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore"
import { db } from "../../firebase-config"

export const firestoreApi = createApi({
  reducerPath: "firestoreApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Journals"],
  endpoints: (builder) => ({
    getDocuments: builder.query({
      queryFn: async ({ collectionName, userId }) => {
        try {
          const q = query(
            collection(db, collectionName),
            where("userId", "==", userId)
          )

          const querySnapshot = await getDocs(q)

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
      queryFn: async ({ collectionName, data, userId }) => {
        try {
          const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            userId,
          })

          return { data: { id: docRef.id, ...data, userId } }
        } catch (error) {
          return { error: error.message }
        }
      },
      invalidatesTags: [{ type: "Journals" }],
    }),

    updateDocument: builder.mutation({
      queryFn: async ({ collectionName, docId, updatedData, userId }) => {
        try {
          const docRef = doc(db, collectionName, docId)
          const docSnapshot = await getDoc(docRef)

          if (docSnapshot.exists()) {
            if (docSnapshot.data().userId !== userId) {
              throw new Error("You can only update your own journal entries.")
            }

            await updateDoc(docRef, updatedData)
            return { data: docId }
          } else {
            throw new Error(
              "Document not found or you don't have permission to update."
            )
          }
        } catch (error) {
          return { error: error.message }
        }
      },
      invalidatesTags: [{ type: "Journals" }],
    }),

    deleteDocument: builder.mutation({
      queryFn: async ({ collectionName, id, userId }) => {
        try {
          const docRef = doc(db, collectionName, id)
          const docSnapshot = await getDoc(docRef)

          if (docSnapshot.exists()) {
            if (docSnapshot.data().userId !== userId) {
              throw new Error("You can only delete your own journal entries.")
            }

            await deleteDoc(docRef)
            return { data: id }
          } else {
            throw new Error(
              "Document not found or you don't have permission to delete."
            )
          }
        } catch (error) {
          return { error: error.message }
        }
      },
      invalidatesTags: [{ type: "Journals" }],
    }),
  }),
})

export const {
  useGetDocumentsQuery,
  useAddDocumentMutation,
  useUpdateDocumentMutation,
  useDeleteDocumentMutation,
} = firestoreApi
