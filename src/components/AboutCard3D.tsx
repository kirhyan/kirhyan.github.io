import styles from "./Card.module.css";
import { Icons3D } from "../lib/icons";

export default function AboutCard(props: { icon3D: Icons3D }) {
  const icon3D = props.icon3D;
  return (
    <div className={styles.cardAbout}>
      <div className={styles.icons3D}>
        <div className={styles.tooltip}>
          <span className={styles.tooltipText}>{icon3D.tooltip}</span>
          <img src={icon3D.imageUrl} width={80} />
        </div>
      </div>
    </div>
  );
}
