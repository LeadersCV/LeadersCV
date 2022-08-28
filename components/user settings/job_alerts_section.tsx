import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import styles from "./job_alerts_section.module.css";

export default function JobAlertsSection() {
  const [firstAlert, setFirstAlert] = useState(false);
  const [secondAlert, setSecondAlert] = useState(true);
  const [thirdAlert, setThirdAlert] = useState(false);

  const handleFirstAlert = (
    event: React.MouseEvent<HTMLElement>,
    newVal: boolean
  ) => {
    setFirstAlert(newVal);
  };

  const handleSecondAlert = (
    event: React.MouseEvent<HTMLElement>,
    newVal: boolean
  ) => {
    setSecondAlert(newVal);
  };

  const handleThirdAlert = (
    event: React.MouseEvent<HTMLElement>,
    newVal: boolean
  ) => {
    setThirdAlert(newVal);
  };

  return (
    <section className={styles.jobAlertsContainer}>
      <div className={styles.jobAlertsTile}>
        <span>Software Engineer - Riyadh , Saudi Arabia - Full Time</span>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={firstAlert}
          exclusive
          onChange={handleFirstAlert}
          aria-label="firstAlert"
        >
          <ToggleButton value={true}>On</ToggleButton>
          <ToggleButton value={false}>Off</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className={styles.jobAlertsTile}>
        <span>Flutter Developer - Khobar , Saudi Arabia - Remote</span>{" "}
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={secondAlert}
          exclusive
          onChange={handleSecondAlert}
          aria-label="secondAlert"
        >
          <ToggleButton value={true}>On</ToggleButton>
          <ToggleButton value={false}>Off</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className={styles.jobAlertsTile}>
        <span>Front End Developer - Dammam , Saudi Arabia - Part Time</span>{" "}
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={thirdAlert}
          exclusive
          onChange={handleThirdAlert}
          aria-label="thirdAlert"
        >
          <ToggleButton value={true}>On</ToggleButton>
          <ToggleButton value={false}>Off</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </section>
  );
}
