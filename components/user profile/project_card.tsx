import styles from "./project_card.module.css";

export default function ProjectCard(props: any) {
  return (
    <div className={styles.card}>
      <span className={styles.titleAndDate}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.date}>({props.date})</span>
      </span>

      <span className={styles.description}>{props.description}</span>
    </div>
  );
}
