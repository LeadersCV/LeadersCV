import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import styles from "./appearance_section.module.css";

export default function AppearanceSection() {
  const [theme, setTheme] = useState("Light");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setTheme(newAlignment);
  };

  return (
    <section className={styles.appearanceContainer}>
      <div className={styles.appearanceTile}>
        <span>Theme</span>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={theme}
          exclusive
          onChange={handleChange}
          aria-label="Theme"
        >
          <ToggleButton value="Light">Light</ToggleButton>
          <ToggleButton value="Dark">Dark</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </section>
  );
}
