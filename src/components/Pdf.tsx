import { useState } from "react";
import { Document, Page } from "react-pdf";
import cv from "../assets/cv.pdf";

export default function Pdf() {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={1000}
        />
      </Document>
    </div>
  );
}
