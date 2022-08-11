import { VerticalTimelineElement } from "react-vertical-timeline-component";

import WorkIcon from "@mui/icons-material/Work";

import "react-vertical-timeline-component/style.min.css";
import classes from "./experience_timeline_element.module.css";

export default function ExperienceTimelineElement(props: any) {
  return (
    <VerticalTimelineElement
      date={props.date}
      dateClassName={classes.date}
      icon={<WorkIcon sx={{ color: "white" }} />}
      iconStyle={{ backgroundColor: "#002463" }}
      contentArrowStyle={{ borderRight: "7px solid #002463" }}
      className={classes.box}
      contentStyle={{
        backgroundColor: "#002463",
        boxShadow: "0px 0px 14px 1px gray",
      }}
    >
      <h3 className="vertical-timeline-element-title">{props.jobTitle}</h3>
      <h6 className="vertical-timeline-element-subtitle">{props.company}</h6>
      <p className={classes.experienceContent}>{props.description}</p>
    </VerticalTimelineElement>
  );
}
