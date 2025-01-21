'use client'
import { useState } from "react";
import { useQAStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { extractPlaceholders, replacePlaceholders } from "@/lib/utils";
import { FileDown } from "lucide-react";

export function DocumentGenerator() {
  const [template, setTemplate] = useState("");
  const [preview, setPreview] = useState("");
  const questions = useQAStore((state) => 
    state.questions.filter(q => q.includeInDocument)
  );

  const handlePreview = () => {
    const placeholders = extractPlaceholders(template);
    const questionMap = questions.reduce((acc, q) => ({
      ...acc,
      [q.question]: q.answer
    }), {});
    
    const result = replacePlaceholders(template, questionMap);
    setPreview(result);
  };

  const handleDownload = () => {
    const blob = new Blob([preview], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated-document.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Document Template</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Enter your template with [placeholders]..."
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="min-h-[200px]"
            />
            <Button 
              onClick={handlePreview}
              className="mt-4 w-full"
            >
              Preview Document
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {questions.map((q) => (
                <div key={q.id} className="p-2 border rounded">
                  <p className="font-medium">[{q.question}]</p>
                  <p className="text-sm text-muted-foreground">{q.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Document Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="min-h-[200px] p-4 border rounded-lg whitespace-pre-wrap">
            {preview || "Preview will appear here..."}
          </div>
          {preview && (
            <Button
              onClick={handleDownload}
              className="mt-4 w-full"
              variant="secondary"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download Document
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}