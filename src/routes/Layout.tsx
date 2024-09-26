import {
  FaHouse,
  FaRegFileLines,
  FaRegUser,
  FaLaptopCode,
  FaGithub,
  FaArtstation,
  FaLinkedin,
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
          <div className={styles.groupMediaIcons}>
            <div className={styles.icons}>
              <a
                href="https://github.com/kirhyan"
                className={styles.webMediaIcons}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mblancoga/"
                className={styles.webMediaIcons}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.artstation.com/kirhyan"
                className={styles.webMediaIcons}
              >
                <FaArtstation />
              </a>
            </div>
          </div>
          <div className={styles.groupMenuItems}>
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
        </div>
        <div id="detail" className={styles.webContainer}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
