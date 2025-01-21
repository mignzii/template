import { QuestionForm } from "@/components/questions/question-form";
import { QuestionList } from "@/components/questions/question-list";

export default function QuestionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Questions & Answers</h1>
        <p className="text-muted-foreground mt-2">
          Add and manage your questions and answers
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Question</h2>
          <QuestionForm />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Question List</h2>
          <QuestionList />
        </div>
      </div>
    </div>
  );
}