import Avatar from "../assets/images/Avatar-copy.png";
import WebImage from "../assets/images/Web-image2.png";
import styles from "./Layout.module.css";

export default function Home() {
  return (
    <section className={styles.homePage}>
      <div className={styles.homeContainer1}>
        <img className={styles.webImage} src={WebImage} />
        <div className={styles.homeText}>
          <h1>Welcome to my Portfolio Web!</h1>
          <h1>
            {" "}
            I'M <span className={styles.myName}> MIRIAM BLANCO </span>
          </h1>
        </div>
      </div>

      <div className={styles.homeContainer2}>
        <div className={styles.homePresentation}>PRESENTATION</div>
        <img className={styles.avatar} src={Avatar} />
      </div>
    </section>
  );
}
