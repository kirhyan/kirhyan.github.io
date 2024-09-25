import {
  FaHouse,
  FaRegFileLines,
  FaRegUser,
  FaLaptopCode,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import Background from "../components/Background";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <Background />

      <div className={styles.app}>
        <div className={styles.webHeader}>
          <div className={styles.menuItems}>
            <FaHouse color="white" fontSize="20px" />
            <NavLink to="/" className={styles.navlink}>
              Home
            </NavLink>
          </div>
          <div className={styles.menuItems}>
            <FaLaptopCode color="white" fontSize="20px" />
            <NavLink to="/projects" className={styles.navlink}>
              Projects
            </NavLink>
          </div>
          <div className={styles.menuItems}>
            <FaRegFileLines color="white" fontSize="20px" />
            <NavLink to="/resume" className={styles.navlink}>
              Resume
            </NavLink>
          </div>
          <div className={styles.menuItems}>
            <FaRegUser color="white" fontSize="20px" />
            <NavLink to="/about" className={styles.navlink}>
              About
            </NavLink>
          </div>
        </div>
        <div id="detail" className={styles.webContainer}>
          <Outlet />
        </div>
      </div>
    </>
  );
}