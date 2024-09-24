import { FaDownload } from "react-icons/fa6";
import styles from "./Layout.module.css";
import { Document, Page } from "@react-pdf/renderer";
import cv from "../assets/images/CV_3D_250124_nophoto_compressed.pdf";

export default function Resume() {
  const pdfURL = "../assets/images/CV_3D_250124_nophoto_compressed.pdf";

  return (
    <section className={styles.resumeContainer}>
      <div>
        <button className={styles.buttonDownload}>
          <FaDownload />
          Download CV
        </button>
        <Document file={pdfURL} />
      </div>
    </section>
  );
}
