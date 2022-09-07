import styles from "./company_quiz_tile.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Chip, IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import PersonIcon from "@mui/icons-material/Person";

export enum quizStatus {
  all = "All",
  scheduled = "Scheduled",
  active = "Active",
  ended = "Ended",
}

interface CompanyQuiz {
  title: string;
  time: number;
  numberOfParticipants: number;
  numberOfQuestions: number;
  maxGrade: number;
  jobTitle: string;
  startDate: string;
  endDate: string;
  status: quizStatus;
  createdDate: string;
}

export default function CompanyQuizTile({
  title,
  time,
  numberOfParticipants,
  numberOfQuestions,
  maxGrade,
  jobTitle,
  startDate,
  endDate,
  status,
  createdDate,
}: CompanyQuiz) {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div>{title}</div>
        <Chip
          label={status}
          color="primary"
          size="small"
          sx={{ width: "fit-content", fontSize: "12px", fontWeight: "bold" }}
        />

        <div className={styles.infoRow}>
          <span>Start date :</span>
          <span>{startDate}</span>
        </div>
        <div className={styles.infoRow}>
          <span>End date :</span>
          <span>{endDate}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Created date :</span>
          <span>{createdDate}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Duration:</span>
          <span>{time} mins</span>
        </div>
        <div className={styles.infoRow}>
          <span>Number of participants :</span>
          <span>{numberOfParticipants}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Job Title :</span>
          <span>{jobTitle}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Number of questions :</span>
          <span>{numberOfQuestions}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Maximum Grade :</span>
          <span>{maxGrade}</span>
        </div>
      </div>

      <div className={styles.actionsColumn}>
        <Tooltip title="View quiz">
          <IconButton aria-label="delete">
            <VisibilityIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="View participants">
          <IconButton aria-label="delete">
            <PersonIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton aria-label="delete">
            <EditIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon color="primary" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
