import { DownloadList } from "@/components/download/download-list";

export default function DownloadPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Download Documents</h1>
        <p className="text-muted-foreground mt-2">
          Access and download your generated documents
        </p>
      </div>
      
      <DownloadList />
    </div>
  );
}