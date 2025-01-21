import { DocumentGenerator } from "@/components/document/document-generator";

export default function GeneratePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Generate Document</h1>
        <p className="text-muted-foreground mt-2">
          Create a document using your questions and answers
        </p>
      </div>
      
      <DocumentGenerator />
    </div>
  );
}