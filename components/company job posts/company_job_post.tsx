import { Chip, IconButton } from "@mui/material";
import styles from "./company_job_post.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface Props {
  title: string;
  status: jobPostStatus;
  publishedDate: string;
  type: jobType;
  location: jobLocation;
  numberOfPoepleApplied: number;
}

export enum jobType {
  fullTime = "Full Time",
  partTime = "Part Time",
  contract = "Contract",
}

export enum jobLocation {
  onSite = "On Site",
  remote = "Remote",
  hybrid = "Hybrid",
}

export enum jobPostStatus {
  all = "All",
  active = "Active",
  inActive = "InActive",
  cancelled = "Cancelled",
  hidden = "Hidden",
}

export default function CompanyJobPost({
  title,
  status,
  type,
  location,
  numberOfPoepleApplied,
  publishedDate,
}: Props) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>{title}</div>
        <Chip
          className={styles.status}
          label={status}
          color={status === jobPostStatus.cancelled ? "error" : "primary"}
          size="small"
          sx={{ width: "fit-content", fontSize: "15px" }}
        />
        <div className={styles.publishedDate}>{publishedDate}</div>

        <div className={styles.infoRow}>
          <span>Applied: </span>
          <span> {numberOfPoepleApplied}</span>
        </div>

        <div className={styles.infoRow}>
          <span>Job Location: </span>
          <span>{location}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Job Type: </span>
          <span>{type}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Salary: </span>
          <span>5000$ - 15000$</span>
        </div>
      </div>

      <div className={styles.actionsColumn}>
        <IconButton aria-label="more-Info">
          <InfoOutlinedIcon color="primary" />
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon color="primary" />
        </IconButton>
        <IconButton aria-label="delete">
          <ClearIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
}
