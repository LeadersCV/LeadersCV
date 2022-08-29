import { Avatar, IconButton } from "@mui/material";
import styles from "./employee_element.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EditIcon from "@mui/icons-material/Edit";

export default function EmployeeElement(props: any) {
  const { name, job, areActionsIncluded } = props;

  return (
    <div className={styles.container}>
      <Avatar sx={{ height: "100px", width: "100px" }} />
      <span className={styles.name}>{name} </span>
      <span className={styles.job}>{job}</span>
      {areActionsIncluded && (
        <div className={styles.actionsRow}>
          <IconButton aria-label="delete" size="medium" color="primary">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" size="medium" color="primary">
            <ChatBubbleIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" size="medium" color="primary">
            <EditIcon fontSize="inherit" />
          </IconButton>
        </div>
      )}
    </div>
  );
}
