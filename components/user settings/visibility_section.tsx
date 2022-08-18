import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import styles from "./visibility_section.module.css";

export default function VisibilitySection() {
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
    <section className={styles.visibilityContainer}>
      <div className={styles.visibilityTile}>
        <span>Show Hobbies</span>
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

      <div className={styles.visibilityTile}>
        <span>Show Interests</span>
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

      <div className={styles.visibilityTile}>
        <span>Show Skills</span>
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
      <div className={styles.visibilityTile}>
        <span>Show Certificates</span>
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
      <div className={styles.visibilityTile}>
        <span>Show Memberships</span>
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
      <div className={styles.visibilityTile}>
        <span>Hide Read Messages</span>
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
      <div className={styles.visibilityTile}>
        <span>Hide On Search</span>
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
