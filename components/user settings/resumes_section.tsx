import styles from "./resumes_section.module.css";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoIcon from "@mui/icons-material/Photo";
import { Button, IconButton } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

export default function ResumesSection() {
  return (
    <section className={styles.resumesContainer}>
      <div className={styles.resumesTile}>
        <InsertDriveFileIcon sx={{ height: "60px", width: "60px" }} />
        <div className={styles.titleDate}>
          <span>Mohammed Khalil CV.pdf</span>
          <span>Uploaded on 21/4/2021</span>
        </div>
        <IconButton aria-label="delete">
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      <div className={styles.resumesTile}>
        <PhotoIcon sx={{ height: "60px", width: "60px" }} />
        <div className={styles.titleDate}>
          <span>Mohammed Khalil CV.jpg</span>
          <span>Uploaded on 25/3/2020</span>
        </div>
        <IconButton aria-label="delete">
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      <div className={styles.resumesTile}>
        <InsertDriveFileIcon sx={{ height: "60px", width: "60px" }} />
        <div className={styles.titleDate}>
          <span>Mohammed Khalil CV.pdf</span>
          <span>Uploaded on 21/4/2022</span>
        </div>
        <IconButton aria-label="delete">
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      <Button variant="outlined" startIcon={<PostAddIcon />}>
        Create your own Resume
      </Button>
    </section>
  );
}
