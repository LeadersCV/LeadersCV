import styles from "./notification_tile.module.css";
import WorkIcon from "@mui/icons-material/Work";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";

export enum notificationType {
  all = "All",
  job = "Job",
  warning = "Warning",
  company = "Company",
  user = "User",
}

interface Notification {
  title: string;
  time: string;
  type: notificationType;
  isRead: boolean;
}

export default function NotificationTile({
  title,
  time,
  type,
  isRead,
}: Notification) {
  let leadingIcon;

  switch (type) {
    case notificationType.warning:
      leadingIcon = <ReportProblemIcon className={styles.leadingIcon} />;
      break;
    case notificationType.job:
      leadingIcon = <WorkIcon className={styles.leadingIcon} />;
      break;
    case notificationType.company:
      leadingIcon = <ApartmentIcon className={styles.leadingIcon} />;
      break;
    case notificationType.user:
      leadingIcon = <PersonIcon className={styles.leadingIcon} />;
      break;
    default:
      leadingIcon = <ReportProblemIcon className={styles.leadingIcon} />;
  }
  return (
    <div className={`${styles.tile} ${isRead ? styles.read : styles.unRead}`}>
      {leadingIcon}
      <span className={styles.title}>{title}</span>
      <span>{time}</span>
    </div>
  );
}
