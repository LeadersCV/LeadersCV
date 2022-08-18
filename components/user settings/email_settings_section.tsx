import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useState } from "react";
import styles from "./email_settings_section.module.css";

export default function EmailSettingsSection() {
  const [blogs, setBlogs] = useState(true);
  const [jobAlert, setJobAlert] = useState(true);

  const handleBlogs = (
    event: React.MouseEvent<HTMLElement>,
    newVal: boolean
  ) => {
    setBlogs(newVal);
  };

  const handleJobAlert = (
    event: React.MouseEvent<HTMLElement>,
    newVal: boolean
  ) => {
    setJobAlert(newVal);
  };

  return (
    <section className={styles.emailSettingsContainer}>
      <div className={styles.emailSettingsTile}>
        <span>Send Blogs on Email</span>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={blogs}
          exclusive
          onChange={handleBlogs}
          aria-label="blogs"
        >
          <ToggleButton value={true}>On</ToggleButton>
          <ToggleButton value={false}>Off</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className={styles.emailSettingsTile}>
        <span>Send Job Alerts on Email</span>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={jobAlert}
          exclusive
          onChange={handleJobAlert}
          aria-label="job alerts"
        >
          <ToggleButton value={true}>On</ToggleButton>
          <ToggleButton value={false}>Off</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </section>
  );
}
