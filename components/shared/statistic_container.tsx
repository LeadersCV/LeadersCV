import styles from "./statistic_container.module.css";

export default function StatisticContainer(props: any) {
  const { title, statistic } = props;

  return (
    <div className={styles.statisticContainer}>
      <span className={styles.title}>{title}</span>
      <span className={styles.statistic}>{statistic}</span>
    </div>
  );
}
