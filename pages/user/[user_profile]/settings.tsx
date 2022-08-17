import Head from "next/head";
import { useEffect, useState } from "react";
import UserHeader from "../../../components/headers and footers/user_header";
import SettingsContent from "../../../components/user settings/settings_content";
import TableOfContents from "../../../components/user settings/table_of_contents";
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
      let jobAlert: HTMLElement | null = document.getElementById("JobAlert");
      const security: HTMLElement | null = document.getElementById("Security");
      const socialMedia: HTMLElement | null =
        document.getElementById("SocialMedia");
      const appearance: HTMLElement | null =
        document.getElementById("Appearance");
      const notifications: HTMLElement | null =
        document.getElementById("Notifications");
      const resumes: HTMLElement | null = document.getElementById("Resume");

      const isJobAlertInViewport = isInViewport(jobAlert);
      const isSecurityInViewport = isInViewport(security);
      const isSocialMediaInViewport = isInViewport(socialMedia);
      const isAppearanceInViewport = isInViewport(appearance);
      const isNotificationsInViewport = isInViewport(notifications);
      const isResumesInViewport = isInViewport(resumes);

      if (isJobAlertInViewport) {
        setSelectedSection("Job Alerts");
        return;
      }
      if (isSecurityInViewport) {
        setSelectedSection("Security");
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
        console.log(isNotificationsInViewport);
        setSelectedSection("Notifications");
        return;
      }
      if (isResumesInViewport) {
        console.log(isResumesInViewport);
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
      <UserHeader />
      <section className={styles.mainPage}>
        <TableOfContents selectedSection={selectedSection} />
        <SettingsContent />
      </section>
    </div>
  );
}
