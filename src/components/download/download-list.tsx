'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

interface Document {
  id: string;
  name: string;
  createdAt: Date;
  content: string;
}

// In a real app, this would come from your backend
const documents: Document[] = [
  {
    id: "1",
    name: "Project Overview",
    createdAt: new Date(),
    content: "Project overview content..."
  },
  {
    id: "2",
    name: "Technical Documentation",
    createdAt: new Date(),
    content: "Technical documentation content..."
  }
];

export function DownloadList() {
  const handleDownload = (doc: Document) => {
    const blob = new Blob([doc.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.name}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {documents.map((doc) => (
        <Card key={doc.id}>
          <CardHeader>
            <CardTitle>{doc.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Created: {doc.createdAt.toLocaleDateString()}
            </p>
            <Button
              onClick={() => handleDownload(doc)}
              className="w-full"
              variant="secondary"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}