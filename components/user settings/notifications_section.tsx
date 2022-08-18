import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useState } from "react";
import styles from "./notifications_section.module.css";

export default function NotificationsSection() {
  const [notification, setNotification] = useState(true);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newVal: boolean
  ) => {
    setNotification(newVal);
  };

  return (
    <section className={styles.notificationsContainer}>
      <div className={styles.notificationsTile}>
        <span>Job Application Status Notifications</span>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={notification}
          exclusive
          onChange={handleChange}
          aria-label="Theme"
        >
          <ToggleButton value={true}>On</ToggleButton>
          <ToggleButton value={false}>Off</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </section>
  );
}
