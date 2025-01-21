import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Document {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
}

interface DocumentStore {
  documents: Document[];
  addDocument: (name: string, content: string) => void;
  deleteDocument: (id: string) => void;
}

export const useDocumentStore = create<DocumentStore>()(
  persist(
    (set) => ({
      documents: [],
      addDocument: (name, content) =>
        set((state) => ({
          documents: [
            ...state.documents,
            {
              id: crypto.randomUUID(),
              name,
              content,
              createdAt: new Date(),
            },
          ],
        })),
      deleteDocument: (id) =>
        set((state) => ({
          documents: state.documents.filter((doc) => doc.id !== id),
        })),
    }),
    {
      name: 'document-storage',
    }
  )
);