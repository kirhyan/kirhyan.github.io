import Avatar from "../assets/images/Avatar.png";
import WebImage from "../assets/images/Home-image.png";
import styles from "./Layout.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.homeContainer1}>
        <img className={styles.webImage} src={WebImage} width="900px" />
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
        <div className={styles.avatar}>
          <img src={Avatar} width="250px" />
        </div>
      </div>
    </div>
  );
}
