'use client'
import { useQAStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil, Trash2 } from "lucide-react";

export function QuestionList() {
  const { questions, toggleInclude, deleteQuestion } = useQAStore();

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div
          key={question.id}
          className="p-4 border rounded-lg bg-white shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="font-medium">{question.question}</h3>
              <p className="text-sm text-gray-600">{question.answer}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteQuestion(question.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <Checkbox
              id={`include-${question.id}`}
              checked={question.includeInDocument}
              onCheckedChange={() => toggleInclude(question.id)}
            />
            <label
              htmlFor={`include-${question.id}`}
              className="text-sm text-gray-600"
            >
              Include in document
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}