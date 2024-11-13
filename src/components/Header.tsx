import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import SocialMediaLinks from "./SocialMediaLinks";

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
    <header
      className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}
    >
      <SocialMediaLinks  />
      <Navbar />
    </header>
  );
}
