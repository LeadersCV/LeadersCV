import styles from "./table_of_contents.module.css";
import PostAddIcon from "@mui/icons-material/PostAdd";

export default function TableOfContents(props: any) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.tocContainer}>
        <span className={styles.title}>Settings</span>
        <span
          className={`${styles.settingsSections} ${
            props.selectedSection === "Job Alerts" && styles.selected
          }`}
        >
          Job Alerts
        </span>
        <span
          className={`${styles.settingsSections} ${
            props.selectedSection === "Security" && styles.selected
          }`}
        >
          Security
        </span>
        <span
          className={`${styles.settingsSections} ${
            props.selectedSection === "Visibility" && styles.selected
          }`}
        >
          Visibility
        </span>
        <span
          className={`${styles.settingsSections} ${
            props.selectedSection === "Social Media" && styles.selected
          }`}
        >
          Social Media
        </span>
        <span
          className={`${styles.settingsSections} ${
            props.selectedSection === "Appearance" && styles.selected
          }`}
        >
          Appearance
        </span>
        <span
          className={`${styles.settingsSections} ${
            props.selectedSection === "Notifications" && styles.selected
          }`}
        >
          Notifications
        </span>
        <span
          className={`${styles.settingsSections} ${
            props.selectedSection === "EmailSettings" && styles.selected
          }`}
        >
          Email Settings
        </span>
        <span
          className={`${styles.settingsSections} ${
            props.selectedSection === "Resumes" && styles.selected
          }`}
        >
          Resumes
        </span>
      </div>
    </div>
  );
}
