import { FaGithub, FaArtstation, FaLinkedin } from "react-icons/fa6";
import styles from "./SocialMediaLinks.module.css";

export default function SocialMediaLinks() {
  return (
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
  );
}
