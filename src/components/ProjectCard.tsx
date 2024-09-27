import styles from "./Card.module.css";
import { Project } from "../lib/projects";

export default function ProjectCard(props: { projectJS: Project }) {
  const projectJS = props.projectJS;
  return (
    <div className={styles.cardDev}>
      <h2 className={styles.titleDev}>{projectJS.title}</h2>
      <div className={styles.containerDev}>
        <img src={projectJS.imageUrl} width={260} />
        <div> {projectJS.content}</div>
      </div>
    </div>
  );
}
