import classes from "./experience_timeline.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import sharedStyles from "./shared_style.module.css";
import TimelineElement from "./timeline_item";

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

      <Timeline position="alternate" sx={{ float: "left" }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineElement
              job="2016 / 2018"
              description="asasaassaewewwsdsdsdsdsdsdsdsdssddssdssdsdsdsdssd"
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <div>Code</div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <div>Code</div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div>Code</div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div>Code</div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
