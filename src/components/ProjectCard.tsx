import styles from "./Card.module.css";
import { Project } from "../lib/projects";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard(props: { projectJS: Project }) {
  const projectJS = props.projectJS;
  return (
    <div className={styles.cardDev}>
      <h2 className={styles.titleDev}>{projectJS.title}</h2>
      <div className={styles.containerDev}>
        <img src={projectJS.imageUrl} width={230} />
        <div> {projectJS.content}</div>
        <a href={projectJS.url} className={styles.buttonDev}>
          <FaGithub />
          Github
        </a>
      </div>
    </div>
  );
}
