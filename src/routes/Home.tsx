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
      <h2>Frontend Developer & 3D Artist</h2>
    </div>
  );

  const introText = (
    <div className={styles.introText}>
      <p>
        I'm a passionate Frontend Developer with a strong foundation in{" "}
        <span className={styles.greenColor}>HTML, CSS, JavaScript,</span> and{" "}
        <span className={styles.greenColor}>React.</span> I specialize in
        creating <span className={styles.greenColor}>dynamic, responsive,</span>{" "}
        and <span className={styles.greenColor}>user-friendly</span> web
        applications that bring ideas to life.
        <br />
        With an eye for <span className={styles.greenColor}>design</span> and a
        love for{" "}
        <span className={styles.greenColor}>clean, efficient code,</span> I
        enjoy solving challenges and building intuitive interfaces that deliver
        great user experiences.
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
      {/*   <div className={styles.leftContent}>
        {titleImage}
        {introText}
      </div>
      <div className={styles.rightContent}>
        {introTitle}
        {avatar}
      </div> */}
    </div>
  );
}
