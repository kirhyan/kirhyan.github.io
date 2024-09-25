import styles from "./Layout.module.css";

export default function Projects() {
  return (
    <section className={styles.projectsPage}>
      <div className={styles.projectsContainer1}>
        <h1> Frontend Developer Works </h1>
        <div> PROJECTS </div>
      </div>
      <div className={styles.projectsContainer2}>
        <h1> 3D Environment Artist Works </h1>
        <div> PROJECTS </div>
      </div>
    </section>
  );
}
