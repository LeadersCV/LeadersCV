import classes from "./projects_section.module.css";
import sharedStyles from "./shared_style.module.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Fab } from "@mui/material";

export default function ProjectsSection(props: any) {
  return (
    <section className={classes.projectsContainer}>
      <div className={sharedStyles.titleAndActions}>
        <div className={sharedStyles.title}>Projects</div>
        {props.isDifferentUser ? null : (
          <span className={sharedStyles.actions}>
            <Fab size="small" aria-label="edit" color="primary">
              <AddIcon sx={{ color: "white" }} />
            </Fab>
            <Fab size="small" aria-label="edit" color="primary">
              <EditIcon sx={{ color: "white" }} />
            </Fab>
          </span>
        )}
      </div>
    </section>
  );
}
