import { Outlet } from "react-router-dom";
import Background from "../components/Background";
import Header from "../components/Header";
import styles from "./Layout.module.css";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <div className={styles.app}>
        <Background />
        <div className={styles.container}>
          <Header />
          <div id="detail" className={styles.webContainer}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
