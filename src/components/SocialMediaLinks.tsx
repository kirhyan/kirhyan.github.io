import { FaGithub, FaArtstation, FaLinkedin } from "react-icons/fa6";
import styles from "./SocialMediaLinks.module.css";

export default function SocialMediaLinks() {
  return (
    <div className={styles.container}>
      <a href="https://github.com/kirhyan">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/mblancoga/">
        <FaLinkedin />
      </a>
      <a href="https://www.artstation.com/kirhyan">
        <FaArtstation />
      </a>
    </div>
  );
}
