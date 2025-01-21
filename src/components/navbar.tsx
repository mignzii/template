import Link from "next/link";
import { Button } from "./ui/button";
import { FileText, Home, PlusCircle, Download } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" className="text-lg font-semibold">
                <Home className="mr-2 h-5 w-5" />
                Q&A Generator
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/questions">
              <Button variant="ghost">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Q&A
              </Button>
            </Link>
            <Link href="/generate">
              <Button variant="ghost">
                <FileText className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </Link>
            <Link href="/download">
              <Button variant="ghost">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}