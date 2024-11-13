import {
  FaHouse,
  FaRegFileLines,
  FaRegUser,
  FaLaptopCode,
} from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderMobileNavbarToggle = () => {
    if (!isMenuOpen) {
      return (
        <div className={styles.navToggle} onClick={toggleMenu}>
          <IoMenu />
        </div>
      );
    }
    return null;
  };

  const renderMobileNavbar = () => {
    if (!isMenuOpen) {
      return null;
    }
    return (
      <div className={styles.showMenu}>
        {renderNavbarLinks()}
        <div className={styles.navClose} onClick={toggleMenu}>
          <IoClose />
        </div>
      </div>
    );
  };

  const renderNavbarLinks = () => {
    const listClassName = isMobile ? styles.navToggle : styles.groupMenuItems;
    const linkClassName = styles.navlink;
    return (
      <ul className={listClassName}>
        <li>
          <FaHouse color="white" fontSize="20px" />
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <FaLaptopCode color="white" fontSize="20px" />
          <NavLink
            to="/projects"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <FaRegFileLines color="white" fontSize="20px" />
          <NavLink
            to="/resume"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <FaRegUser color="white" fontSize="20px" />
          <NavLink
            to="/about"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <nav>
      {isMobile && renderMobileNavbarToggle()}
      {isMobile ? renderMobileNavbar() : renderNavbarLinks()}
    </nav>
  );
}
