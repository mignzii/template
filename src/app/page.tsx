import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, PlusCircle, FileDown } from "lucide-react";

export default function Home() {
  // In a real app, these would come from your data store
  const totalQuestions = 15;
  const totalAnswers = 12;

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Questions & Answers</CardTitle>
            <CardDescription>Manage your Q&A database</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold">{totalQuestions}</div>
            <p className="text-sm text-muted-foreground">Total Questions</p>
            <Link href="/questions">
              <Button className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Questions
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document Generation</CardTitle>
            <CardDescription>Create custom documents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold">{totalAnswers}</div>
            <p className="text-sm text-muted-foreground">Available Answers</p>
            <Link href="/generate">
              <Button className="w-full" variant="secondary">
                <FileText className="mr-2 h-4 w-4" />
                Generate Document
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Downloads</CardTitle>
            <CardDescription>Access your documents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/download">
              <Button className="w-full" variant="outline">
                <FileDown className="mr-2 h-4 w-4" />
                Download Documents
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}