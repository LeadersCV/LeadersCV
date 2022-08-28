import styles from "./settings_content.module.css";

import AppearanceSection from "./appearance_section";
import SocialMediaSection from "./social_media_section";
import JobAlertsSection from "./job_alerts_section";
import SecuritySection from "./security_section";
import VisibilitySection from "./visibility_section";
import NotificationsSection from "./notifications_section";
import EmailSettingsSection from "./email_settings_section";
import ResumesSection from "./resumes_section";

export default function SettingsContent() {
  return (
    <section className={styles.mainContainer}>
      <h1 id="JobAlert" className={styles.header}>
        Job Alerts
      </h1>
      <JobAlertsSection />
      <h1 id="Security" className={styles.header}>
        Security
      </h1>
      <SecuritySection />
      <h1 id="Visibility" className={styles.header}>
        Visibility
      </h1>
      <VisibilitySection />
      <h1 id="SocialMedia" className={styles.header}>
        Social Media
      </h1>
      <SocialMediaSection />
      <h1 id="Appearance" className={styles.header}>
        Appearance
      </h1>
      <AppearanceSection />
      <h1 id="Notifications" className={styles.header}>
        Notifications
      </h1>
      <NotificationsSection />
      <h1 id="EmailSettings" className={styles.header}>
        Email Settings
      </h1>
      <EmailSettingsSection />
      <h1 id="Resume" className={styles.header}>
        Resumes
      </h1>
      <ResumesSection />
    </section>
  );
}
