import Head from "next/head";
import { useEffect, useState } from "react";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import SettingsContent from "../../../components/User Settings/settings_content";
import TableOfContents from "../../../components/User Settings/table_of_contents";
import styles from "../../../styles/user profile/settings.module.css";

export default function UserSettings() {
  const [selectedSection, setSelectedSection] = useState("Job Alerts");

  function isInViewport(el: HTMLElement | null): Boolean {
    if (el !== null) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    return false;
  }

  useEffect(() => {
    const onScroll = () => {
      const jobAlert: HTMLElement | null = document.getElementById("JobAlert");
      const security: HTMLElement | null = document.getElementById("Security");
      const visibility: HTMLElement | null =
        document.getElementById("Visibility");
      const socialMedia: HTMLElement | null =
        document.getElementById("SocialMedia");
      const appearance: HTMLElement | null =
        document.getElementById("Appearance");
      const notifications: HTMLElement | null =
        document.getElementById("Notifications");
      const resumes: HTMLElement | null = document.getElementById("Resume");

      const emailSettings: HTMLElement | null =
        document.getElementById("EmailSettings");

      const isJobAlertInViewport = isInViewport(jobAlert);
      const isSecurityInViewport = isInViewport(security);
      const isVisibilityInViewport = isInViewport(visibility);
      const isSocialMediaInViewport = isInViewport(socialMedia);
      const isAppearanceInViewport = isInViewport(appearance);
      const isNotificationsInViewport = isInViewport(notifications);
      const isResumesInViewport = isInViewport(resumes);
      const isEmailSettingsInViewport = isInViewport(emailSettings);

      if (isJobAlertInViewport) {
        setSelectedSection("Job Alerts");
        return;
      }
      if (isSecurityInViewport) {
        setSelectedSection("Security");
        return;
      }
      if (isVisibilityInViewport) {
        setSelectedSection("Visibility");
        return;
      }
      if (isSocialMediaInViewport) {
        setSelectedSection("Social Media");
        return;
      }
      if (isAppearanceInViewport) {
        setSelectedSection("Appearance");
        return;
      }
      if (isNotificationsInViewport) {
        setSelectedSection("Notifications");
        return;
      }
      if (isEmailSettingsInViewport) {
        setSelectedSection("EmailSettings");
        return;
      }
      if (isResumesInViewport) {
        setSelectedSection("Resumes");
        return;
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>User Settings</title>
      </Head>
      <UserOrCompanyHeader />
      <section className={styles.mainPage}>
        <TableOfContents selectedSection={selectedSection} />
        <SettingsContent />
      </section>
    </div>
  );
}
