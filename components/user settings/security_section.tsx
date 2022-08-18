import { Button } from "@mui/material";
import styles from "./security_section.module.css";

export default function SecuritySection() {
  return (
    <section className={styles.securityContainer}>
      <div className={styles.securityTile}>
        <span>Two Factor Authentication</span>
        <Button variant="contained" size="small">
          Enable
        </Button>
      </div>
      <div className={styles.securityTile}>
        <span> Password</span>
        <Button variant="contained" size="small">
          Change
        </Button>
      </div>
    </section>
  );
}
