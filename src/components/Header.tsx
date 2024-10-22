import {
  FaHouse,
  FaRegFileLines,
  FaRegUser,
  FaLaptopCode,
  FaGithub,
  FaArtstation,
  FaLinkedin,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.groupMediaIcons}>
        <div className={styles.icons}>
          <a href="https://github.com/kirhyan" className={styles.webMediaIcons}>
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
  );
}
