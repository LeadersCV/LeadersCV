import styles from "./interview_container.module.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Chip } from "@mui/material";

export enum InterviewType {
  Phone,
  Zoom,
  Face_To_Face,
}

export default function InterviewContainer(props: any) {
  const { interviewType, date } = props;

  return (
    <div className={styles.mainContainer}>
      <PhoneAndroidIcon sx={{ fontSize: "72px", margin: "0px 12px" }} />
      <div className={styles.infoColumn}>
        <span className={styles.interviewType}>Phone Interview</span>
        <Chip
          label={interviewType}
          size="small"
          color="primary"
          sx={{ fontSize: "12px" }}
        />
        <span className={styles.date}>{date}</span>
        <span>Phone Interview</span>
        <span>Phone Interview</span>
      </div>
    </div>
  );
}
