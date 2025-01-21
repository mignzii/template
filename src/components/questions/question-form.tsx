'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQAStore } from "@/lib/store";
import { QuestionFormData } from "@/lib/types";

const questionSchema = z.object({
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
  includeInDocument: z.boolean().default(true),
});

export function QuestionForm() {
  const addQuestion = useQAStore((state) => state.addQuestion);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      includeInDocument: true,
    },
  });

  const onSubmit = (data: QuestionFormData) => {
    addQuestion(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Enter your question"
          {...register("question")}
          className={errors.question ? "border-red-500" : ""}
        />
        {errors.question && (
          <p className="text-red-500 text-sm mt-1">{errors.question.message}</p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Enter your answer"
          {...register("answer")}
          className={errors.answer ? "border-red-500" : ""}
        />
        {errors.answer && (
          <p className="text-red-500 text-sm mt-1">{errors.answer.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="includeInDocument"
          {...register("includeInDocument")}
        />
        <label
          htmlFor="includeInDocument"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Include in generated document
        </label>
      </div>

      <Button type="submit" className="w-full">
        Add Question
      </Button>
    </form>
  );
}