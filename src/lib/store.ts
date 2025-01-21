import { create } from 'zustand';
import { Question } from './types';

interface QAStore {
  questions: Question[];
  addQuestion: (question: Omit<Question, 'id' | 'createdAt'>) => void;
  updateQuestion: (id: string, question: Partial<Question>) => void;
  deleteQuestion: (id: string) => void;
  toggleInclude: (id: string) => void;
}

export const useQAStore = create<QAStore>((set) => ({
  questions: [],
  addQuestion: (questionData) => 
    set((state) => ({
      questions: [...state.questions, {
        ...questionData,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      }],
    })),
  updateQuestion: (id, questionData) =>
    set((state) => ({
      questions: state.questions.map((q) =>
        q.id === id ? { ...q, ...questionData } : q
      ),
    })),
  deleteQuestion: (id) =>
    set((state) => ({
      questions: state.questions.filter((q) => q.id !== id),
    })),
  toggleInclude: (id) =>
    set((state) => ({
      questions: state.questions.map((q) =>
        q.id === id ? { ...q, includeInDocument: !q.includeInDocument } : q
      ),
    })),
}));