import Image from "next/image";
import { IconButton } from "@mui/material";
import styles from "./single_client.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function SingleClient(props: any) {
  const { title, imageUrl, areActionsIncluded } = props;

  return (
    <div className={styles.container}>
      <Image
        src={"/" + imageUrl.src}
        alt="image"
        height="100%"
        width="100%"
        objectFit="cover"
      />
      <span className={styles.title}>{title}</span>
      {areActionsIncluded && (
        <div className={styles.actionsRow}>
          <IconButton aria-label="delete" size="medium" color="primary">
            <DeleteIcon fontSize="inherit" />
          </IconButton>

          <IconButton aria-label="delete" size="medium" color="primary">
            <EditIcon fontSize="inherit" />
          </IconButton>
        </div>
      )}
    </div>
  );
}
