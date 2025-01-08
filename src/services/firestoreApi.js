import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

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
      // Invalidate the 'LIST' tag when adding a new document
      invalidatesTags: [{ type: 'Journals', id: 'LIST' }],
    }),
    // Update a document by ID
    updateDocument: builder.mutation({
      query: ({ collectionName, docId, updatedData }) => async () => {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, updatedData);
        return { docId, updatedData };
      },
      // Invalidate the 'LIST' tag when updating a document
      invalidatesTags: [{ type: 'Journals', id: 'LIST' }],
    }),
    // Delete a document by ID
    deleteDocument: builder.mutation({
      query: ({ collectionName, docId }) => async () => {
        const docRef = doc(db, collectionName, docId);
        await deleteDoc(docRef);
        return docId;
      },
      // Invalidate the 'LIST' tag when deleting a document
      invalidatesTags: [{ type: 'Journals', id: 'LIST' }],
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
