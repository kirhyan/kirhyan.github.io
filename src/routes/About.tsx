import AboutImage from "../assets/images/Programmer.png";
import styles from "./About.module.css";
import AboutCard3D from "../components/AboutCard3D";
import icon3D from "../lib/icons";
import AboutCardDev from "../components/AboutCardDev";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h1>ABOUT ME</h1>
          <p>
            Hi! I'm <span className={styles.greenColor}>Miriam Blanco</span>{" "}
            from <span className={styles.greenColor}>Madrid, Spain.</span> Here
            you can learn a little more about me!
            <br />
            <br />
            With a unique background in both{" "}
            <span className={styles.greenColor}>creative</span> and{" "}
            <span className={styles.greenColor}>technical fields,</span> I’ve
            found my passion in{" "}
            <span className={styles.greenColor}>
              full stack web development.
            </span>{" "}
            <br />
            <br />I hold a Double Bachelor's Degree in Business Management and
            Audiovisual Communication, and after gaining experience in{" "}
            <span className={styles.greenColor}>3D design</span> for video
            games, I shifted my focus to{" "}
            <span className={styles.greenColor}>coding</span> and{" "}
            <span className={styles.greenColor}>building</span> for the{" "}
            <span className={styles.greenColor}>web.</span>
            <br />
            Specializing in{" "}
            <span className={styles.greenColor}>
              HTML, CSS, JavaScript, React, Express,
            </span>{" "}
            and <span className={styles.greenColor}>PostgreSQL,</span> I love
            creating dynamic, responsive, and visually engaging websites. <br />
            <br />
            My diverse experience gives me a fresh perspective on design and
            functionality, allowing me to build user-friendly web applications
            that blend{" "}
            <span className={styles.greenColor}>
              creativity, performance
            </span>{" "}
            and{" "}
            <span className={styles.greenColor}>
              thoughtful user experience.
            </span>
          </p>
        </div>
        <div className={styles.column}>
          <img src={AboutImage} className={styles.webImage} />
        </div>
      </div>
      <div className={styles.aboutContainer2}>
        <h1>SKILLS</h1>
        <div className={styles.aboutIcons}>
          <h2>DEVELOPER</h2>
          <div className={styles.aboutIconsDev}>
            <AboutCardDev />
          </div>
          <h2>DESIGN</h2>
          <div className={styles.aboutIcons3D}>
            {icon3D.map((icon, id) => {
              return <AboutCard3D icon3D={icon} key={id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
