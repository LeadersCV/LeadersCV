import styles from "./messaging_settings.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export default function MessagingSettings() {
  const [HideOnRead, setHideOnRead] = useState(false);

  const handleHideOnRead = (
    event: React.MouseEvent<HTMLElement>,
    newHideOnRead: boolean | null
  ) => {
    if (newHideOnRead !== null) {
      setHideOnRead(newHideOnRead);
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.title}>Settings</div>
      <div className={styles.settingsTile}>
        <span>Hide on Read</span>
        <ToggleButtonGroup
          value={HideOnRead}
          exclusive
          onChange={handleHideOnRead}
          sx={{
            height: "35px",
          }}
          aria-label="Hide on read"
        >
          <ToggleButton value={true} aria-label="Yes">
            Yes
          </ToggleButton>
          <ToggleButton value={false} aria-label="No">
            No
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
