import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import sharedStyles from "./shared_style.module.css";
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import ExperienceTimelineElement from "./experience_timeline_element";

export default function ExperienceTimeline(props: any) {
  return (
    <section className={sharedStyles.mainContainer}>
      <div className={sharedStyles.titleAndActions}>
        <div className={sharedStyles.title}>Experience</div>
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
      <VerticalTimeline lineColor="#002463" animate={true}>
        <ExperienceTimelineElement
          jobTitle="Flutter Developer"
          company="Mham International IT"
          date="07/3/2021 - Current"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum
          temporibus, quia, unde ut ex mollitia libero voluptates, recusandae
          nihil similique?"
        />
        <ExperienceTimelineElement
          jobTitle="Software Engineer"
          company="Mham International IT"
          date="10/04/2021 - 07/08/2021"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum
          temporibus, quia, unde ut ex mollitia libero voluptates, recusandae
          nihil similique?"
        />
        <ExperienceTimelineElement
          jobTitle="Front End Developer"
          company="Mham International IT"
          date="07/3/2021 - Current"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum
          temporibus, quia, unde ut ex mollitia libero voluptates, recusandae
          nihil similique?"
        />
        <ExperienceTimelineElement
          jobTitle="BackEnd Developer"
          company="Mham International IT"
          date="07/3/2021 - Current"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum
          temporibus, quia, unde ut ex mollitia libero voluptates, recusandae
          nihil similique?"
        />
      </VerticalTimeline>
    </section>
  );
}
