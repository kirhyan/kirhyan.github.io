import styles from "./Layout.module.css";

export default function Projects() {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.projectsContainer}>
        <h1 className={styles.projectsTitles}> Frontend Developer Works </h1>
        <div className={styles.jsProjects}> PROJECTS </div>
      </div>
      <div className={styles.projectsContainer}>
        <h1> 3D Environment Artist Works </h1>
        <div> PROJECTS </div>
      </div>
    </div>
  );
}
