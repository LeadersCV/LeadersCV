import styles from "./settings_content.module.css";

export default function SettingsContent() {
  return (
    <section className={styles.mainContainer}>
      <h1 id="JobAlert" className={styles.header}>
        Job Alerts
      </h1>
      <section style={{ height: "50vh" }}></section>
      <h1 id="Security" className={styles.header}>
        Security
      </h1>
      <section style={{ height: "50vh" }}></section>
      <h1 id="SocialMedia" className={styles.header}>
        Social Media
      </h1>
      <section style={{ height: "50vh" }}></section>
      <h1 id="Appearance" className={styles.header}>
        Appearance
      </h1>
      <section style={{ height: "50vh" }}></section>
      <h1 id="Notifications" className={styles.header}>
        Notifications
      </h1>
      <section style={{ height: "50vh" }}></section>
      <h1 id="Resume" className={styles.header}>
        Resumes
      </h1>
      <section style={{ height: "50vh" }}></section>
    </section>
  );
}
