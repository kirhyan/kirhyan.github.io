import { FaDownload } from "react-icons/fa6";
import styles from "./Resume.module.css";
import { pdfjs } from "react-pdf";
import Pdf from "../components/Pdf";
import pdfUrl from "../assets/cv.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  return (
    <section className={styles.resumePage}>
      <div className={styles.resumeContainer}>
        <a
          href={pdfUrl}
          download="MiriamBlanco_Resume.pdf"
          className={styles.buttonDownload}
        >
          <FaDownload className={styles.downloadIcon} />
          Download CV
        </a>
        <div className={styles.cv}>
          <Pdf />
        </div>
        <a
          href={pdfUrl}
          download="MiriamBlanco_Resume.pdf"
          className={styles.buttonDownload}
        >
          <FaDownload className={styles.downloadIcon} />
          Download CV
        </a>
      </div>
    </section>
  );
}
