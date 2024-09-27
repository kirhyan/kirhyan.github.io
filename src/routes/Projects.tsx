import styles from "./Projects.module.css";
import CardDev from "../components/ProjectCard";
import Card3D from "../components/ProjectCard3D";
import projectJS, { project3D } from "../lib/projects";

export default function Projects() {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.projectsContainer}>
        <h1 className={styles.projectsTitles}> Frontend Developer Works </h1>
        <div className={styles.projectsDev}>
          {/* por cada project en projectjs, renderizo un Card pasandole la info de cada project */}
          {projectJS.map((project, id) => {
            return <CardDev projectJS={project} key={id} />;
          })}
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <h1 className={styles.projectsTitles}> 3D Environment Artist Works </h1>
        <div className={styles.projects3D}>
          {project3D.map((project, id) => {
            return <Card3D project3D={project} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
}
