import classes from "./projects_section.module.css";
import sharedStyles from "./shared_style.module.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Fab } from "@mui/material";
import ProjectCard from "./project_card";

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
      <div className={classes.projectsList}>
        <ProjectCard
          title="Determined"
          description="A project that talks about app usage  , goals and other stuff"
          date="Sep 2021 - Aug 2022"
        />
        <hr style={{ width: "50%", margin: "0px 12px" }} />
        <ProjectCard
          title="Determined"
          description="A project that talks about app usage  , goals and other stuff"
          date="Jan 2019 - Aug 2021"
        />
        <hr style={{ width: "50%", margin: "0px 12px" }} />
        <ProjectCard
          title="Determined"
          description="A project that talks about app usage  , goals and other stuff"
          date="Mar 2018 - Aug 2020"
        />
        <hr style={{ width: "50%", margin: "0px 12px" }} />
        <ProjectCard
          title="Determined"
          description="A project that talks about app usage  , goals and other stuff"
          date="Feb 2015 - Aug 2020"
        />
        <hr style={{ width: "50%", margin: "0px 12px" }} />
      </div>
    </section>
  );
}
