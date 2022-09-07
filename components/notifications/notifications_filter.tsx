import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import styles from "./notifications_filter.module.css";
import { notificationType } from "./notification_tile";

export default function NotificationsFilter() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterTypContainer}>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ fontWeight: "bold" }}
          >
            Notification Type:
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={notificationType.all}
            name="radio-buttons-group"
          >
            {Object.values(notificationType).map((type, key) => (
              <FormControlLabel
                value={type}
                key={key}
                control={<Radio />}
                label={type}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
