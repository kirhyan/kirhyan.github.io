import AboutImage from "../assets/images/Programmer.png";
import styles from "./About.module.css";
import AboutCard3D from "../components/AboutCard3D";
import icon3D from "../lib/icons";
import AboutCardDev from "../components/AboutCardDev";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutContainer1}>
        <div className={styles.aboutText}>
          <h1>ABOUT ME</h1>
          <p>
            Hi! I'm <span className={styles.greenColor}>Miriam Blanco</span>{" "}
            from <span className={styles.greenColor}>Madrid, Spain.</span> Here
            you can learn a little more about me!
          </p>
          <p>
            With a unique background in both{" "}
            <span className={styles.greenColor}>creative</span> and{" "}
            <span className={styles.greenColor}>technical fields,</span> I’ve
            found my passion in{" "}
            <span className={styles.greenColor}>web development.</span>{" "}
          </p>
          <p>
            I hold a Double Bachelor's Degree in Business Management and
            Audiovisual Communication, and after gaining experience in{" "}
            <span className={styles.greenColor}>3D design</span> for video
            games, I shifted my focus to the world of{" "}
            <span className={styles.greenColor}>web development.</span>
          </p>
          <p>
            Specializing in{" "}
            <span className={styles.greenColor}>HTML, CSS, JavaScript,</span>{" "}
            and <span className={styles.greenColor}>React,</span> I love
            creating dynamic, responsive, and visually engaging websites.{" "}
          </p>
          <p>
            My diverse experience gives me a fresh perspective on design and
            functionality, allowing me to build user-friendly web applications
            that blend <span className={styles.greenColor}>creativity</span> and{" "}
            <span className={styles.greenColor}>performance.</span>
          </p>
        </div>
        <div className={styles.aboutImage}>
          <img src={AboutImage} width={900} />
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
