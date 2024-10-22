import { useState } from "react";
import { Document, Page } from "react-pdf";
import cv from "../assets/cv.pdf";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import styles from "./Pdf.module.css";

export default function Pdf() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={800}
        />
      </Document>
      <div className={styles.pagesStyle}>
        <p>
          {" "}
          Page {pageNumber} of {numPages}
        </p>
        {pageNumber > 1 ? (
          <button
            onClick={() => setPageNumber(pageNumber - 1)}
            className={styles.pageButton}
          >
            <FaArrowLeftLong className={styles.arrow} />
            Previous
          </button>
        ) : null}
        {pageNumber < numPages ? (
          <button
            onClick={() => setPageNumber(pageNumber + 1)}
            className={styles.pageButton}
          >
            Next
            <FaArrowRightLong className={styles.arrow} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
