import styles from "./interview_container.module.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GoogleIcon from "@mui/icons-material/Google";
import { Avatar, Chip, IconButton } from "@mui/material";
import Stack from "@mui/system/Stack/Stack";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

export enum InterviewType {
  Phone = "Phone",
  Zoom = "Zoom",
  Face_To_Face = "Face To Face",
}

export default function InterviewContainer(props: any) {
  const { interviewType, date, isScheduled, intervieweeName, isCancelled } =
    props;

  return (
    <div className={styles.mainContainer}>
      {<Avatar sx={{ width: 72, height: 72, margin: "0px 12px" }} />}

      <div className={styles.infoColumn}>
        <span className={styles.interviewTitle}>{intervieweeName}</span>
        <Stack direction="row" spacing={1}>
          <Chip
            label={interviewType}
            size="small"
            icon={
              interviewType == InterviewType.Face_To_Face ? (
                <Diversity3Icon />
              ) : interviewType == InterviewType.Zoom ? (
                <GoogleIcon />
              ) : (
                <PhoneAndroidIcon />
              )
            }
            color="primary"
            sx={{ fontSize: "12px", fontWeight: "bold" }}
          />
          {isCancelled && (
            <Chip
              label="Cancelled"
              size="small"
              sx={{
                fontSize: "12px",
                color: "white",
                backgroundColor: "red",
                fontWeight: "bold",
              }}
            />
          )}
          {isScheduled && (
            <Chip
              label="Scheduled"
              size="small"
              icon={<AccessTimeFilledIcon />}
              color="secondary"
              sx={{ fontSize: "12px", color: "black", fontWeight: "bold" }}
            />
          )}
        </Stack>

        <span className={styles.date}>{date}</span>
        <div className={styles.infoRow}>
          <span>Interviewer(s):</span>
          <span>Ibrahim</span>
        </div>
        <div className={styles.infoRow}>
          <span>Job Application:</span>
          <span>Software Developer</span>
        </div>
      </div>
      <div className={styles.actionsColumn}>
        <IconButton aria-label="delete">
          <EditIcon color="primary" />
        </IconButton>
        <IconButton aria-label="delete">
          <ClearIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
}
