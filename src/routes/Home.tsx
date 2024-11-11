import Avatar from "../assets/images/Avatar.png";
import WebImage from "../assets/images/Home-image.png";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <img className={styles.webImage} src={WebImage} />
        </div>
        <div className={styles.column}>
          <div className={styles.introTitle}>
            <h1>Welcome to my Personal Website!</h1>
            <h1>
              I'M <span className={styles.myName}> MIRIAM BLANCO,</span>
            </h1>
            <h2>Frontend Developer & 3D Artist</h2>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <p>
            I'm a passionate Frontend Developer with a strong foundation in{" "}
            <span className={styles.greenColor}>HTML, CSS, JavaScript,</span>{" "}
            and <span className={styles.greenColor}>React.</span>
            <br />I specialize in creating{" "}
            <span className={styles.greenColor}>
              dynamic, responsive,
            </span> and <span className={styles.greenColor}>user-friendly</span>{" "}
            web applications that bring ideas to life.
            <br />
            With an eye for <span className={styles.greenColor}>
              design
            </span>{" "}
            and a love for{" "}
            <span className={styles.greenColor}>clean, efficient code,</span> I
            enjoy solving challenges and building intuitive interfaces that
            deliver great user experiences.
          </p>
        </div>

        <div className={styles.column}>
          <img src={Avatar} width="250px" height={"250px"} />
        </div>
      </div>
    </div>
  );
}
