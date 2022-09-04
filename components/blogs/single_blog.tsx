import styles from "./single_blog.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

interface BlogComponents {
  title: string;
  content: string;
  publishedAt: string;
  writtenBy: string;
  views: number;
}

export default function SingleBlog({
  title,
  content,
  publishedAt,
  writtenBy,
  views,
}: BlogComponents) {
  return (
    <div className={styles.singleBlog}>
      <span>{title}</span>
      <span>{content}</span>
      <div className={styles.infoRow}>
        <div className={styles.infoColumn}>
          <AccessTimeIcon fontSize="medium" />
          <span>{publishedAt}</span>
        </div>
        <div className={styles.infoColumn}>
          <RemoveRedEyeOutlinedIcon fontSize="medium" />
          <span>{views}</span>
        </div>
        <div className={styles.infoColumn}>
          <ModeEditOutlineOutlinedIcon fontSize="medium" />
          <span>{writtenBy}</span>
        </div>
      </div>
      <div className={styles.actionsRow}>
        <IconButton aria-label="delete" size="medium" color="primary">
          <DeleteIcon fontSize="inherit" />
        </IconButton>

        <IconButton aria-label="delete" size="medium" color="primary">
          <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}
