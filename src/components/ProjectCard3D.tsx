import styles from "./Card.module.css";
import { Project } from "../lib/projects";

export default function ProjectCard3D(props: { project3D: Project }) {
  const project3D = props.project3D;
  return (
    <div className={styles.card3D}>
      <h2 className={styles.title3D}>{project3D.title}</h2>
      <div className={styles.container3D}>
        <img src={project3D.imageUrl} width={350} />
        <div>{project3D.content}</div>
      </div>
    </div>
  );
}
