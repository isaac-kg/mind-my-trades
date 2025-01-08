import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase-config'

export const firestoreApi = createApi({
  reducerPath: 'firestoreApi',
  baseQuery: fakeBaseQuery(), 
  tagTypes: ['Journals'],
  endpoints: (builder) => ({
    getDocuments: builder.query({
      queryFn: async (collectionName) => {
        try {
          const querySnapshot = await getDocs(collection(db, collectionName));
          const documents = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
    
          return { data: documents };
        } catch (error) {
          console.error("Error fetching documents: ", error);
          return { error: error.message };
        }
      },
      providesTags: ["Journals"]
    }),
    addDocument: builder.mutation({
      queryFn: async ({ collectionName, data }) => {
        try {
          const docRef = await addDoc(collection(db, collectionName), data);
          return {data:  { id: docRef.id, ...data }}
        } catch (error) {
          return {error: error.message}
        }
      },
      invalidatesTags: [{ type: 'Journals'}],
    }),
    updateDocument: builder.mutation({
      query: ({ collectionName, docId, updatedData }) => async () => {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, updatedData);
        return { docId, updatedData };
      },
      invalidatesTags: [{ type: 'Journals', id: 'LIST' }],
    }),
    // Delete a document by ID
    deleteDocument: builder.mutation({
      queryFn: async ({ collectionName, id }) => {
        console.log("This is delelte: ", collectionName, id)
        try {
          await deleteDoc(doc(collection(db, collectionName), id));
          return {data: id}
        } catch (error) {
          return {error: error.message}
        }
      },
      invalidatesTags: [{ type: 'Journals'}],
    }),
  }),
});

// Export hooks to use in your components
export const {
  useGetDocumentsQuery,
  useAddDocumentMutation,
  useUpdateDocumentMutation,
  useDeleteDocumentMutation,
} = firestoreApi;
