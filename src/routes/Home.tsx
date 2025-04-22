import Avatar from "../assets/images/Avatar.png";
import WebImage from "../assets/images/Home-image.png";
import { useMediaQuery } from "react-responsive";
import styles from "./Home.module.css";

export default function Home() {
  const isLaptopOrMobile = useMediaQuery({ maxWidth: "1680px" });

  const titleImage = (
    <div className={styles.titleImageContainer}>
      <img className={styles.titleImage} src={WebImage} />
    </div>
  );

  const introTitle = (
    <div className={styles.introTitle}>
      <h1>Welcome to my Personal Website!</h1>
      <h1>
        I'M <span className={styles.myName}> MIRIAM BLANCO,</span>
      </h1>
      <h2>Full Stack Developer & 3D Artist</h2>
    </div>
  );

  const introText = (
    <div className={styles.introText}>
      <p>
        I'm a passionate Full Stack Developer with a strong foundation in{" "}
        <span className={styles.greenColor}>HTML, CSS, JavaScript,</span> and{" "}
        <span className={styles.greenColor}>React.</span> as well as backend
        experience with{" "}
        <span className={styles.greenColor}>Express and PostgreSQL.</span>I
        specialize in building{" "}
        <span className={styles.greenColor}>dynamic, responsive,</span> and{" "}
        <span className={styles.greenColor}>user-friendly</span> web
        applications from front to back, turning ideas into functional and
        polished products.
        <br />
        With an eye for <span className={styles.greenColor}>design</span> and a
        love for{" "}
        <span className={styles.greenColor}>clean, efficient code,</span> I
        enjoy solving challenges across the stack and creating seamless,
        intuitive experiences for users.
      </p>
    </div>
  );

  const avatar = (
    <div className={styles.avatarContainer}>
      <img className={styles.avatar} src={Avatar} />
    </div>
  );

  return (
    <div className={styles.container}>
      {isLaptopOrMobile ? (
        <>
          <div className={styles.leftContent}>
            {introText} {titleImage}
          </div>
          <div className={styles.rightContent}>
            {introTitle}
            {avatar}
          </div>
        </>
      ) : (
        <>
          <div className={styles.leftContent}>
            {titleImage}
            {introText}
          </div>
          <div className={styles.rightContent}>
            {introTitle}
            {avatar}
          </div>
        </>
      )}
    </div>
  );
}
