export interface Question {
  id: string;
  question: string;
  answer: string;
  includeInDocument: boolean;
  createdAt: Date;
}

export interface QuestionFormData {
  question: string;
  answer: string;
  includeInDocument: boolean;
}

export interface DocumentTemplate {
  content: string;
  placeholders: string[];
}