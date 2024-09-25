import { FaDownload } from "react-icons/fa6";
import styles from "./Layout.module.css";
import { pdfjs } from "react-pdf";
import Pdf from "../components/Pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  return (
    <section className={styles.resumePage}>
      <div className={styles.resumeContainer}>
        <button className={styles.buttonDownload}>
          <FaDownload className={styles.downloadIcon} />
          Download CV
        </button>
        <div className={styles.cv}>
          <Pdf />
        </div>
        <button className={styles.buttonDownload}>
          <FaDownload className={styles.downloadIcon} />
          Download CV
        </button>
      </div>
    </section>
  );
}
