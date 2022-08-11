import classes from "./job_suggestion.module.css";

import Avatar from "@mui/material/Avatar/Avatar";
import Button from "@mui/material/Button/Button";

export default function JobSuggestion(props: any) {
  return (
    <div className={classes.jobSuggestion}>
      <Avatar
        sx={{ width: 56, height: 56 }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
      <div className={classes.jobDetails}>
        <span className={classes.title}>{props.job}</span>
        <span className={classes.company}>{props.company}</span>
      </div>
      <Button size="small" variant="outlined" sx={{ margin: "0px 8px" }}>
        Details
      </Button>
      <Button size="small" variant="contained">
        Apply
      </Button>
    </div>
  );
}
