import classes from "./project_member_suggestion.module.css";

import Avatar from "@mui/material/Avatar/Avatar";
import Button from "@mui/material/Button/Button";

export default function ProjectMemberSuggestion(props: any) {
  return (
    <div className={classes.projectMemberSuggestion}>
      <Avatar
        sx={{ width: 56, height: 56 }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
      <div className={classes.memberDetails}>
        <span className={classes.title}>{props.name}</span>
        <span className={classes.company}>{props.job}</span>
        <span className={classes.suggestion}>
          Suggested for {props.job} role
        </span>
      </div>
      <Button size="small" variant="outlined" sx={{ margin: "0px 8px" }}>
        View
      </Button>
      <Button size="small" variant="contained">
        Invite
      </Button>
    </div>
  );
}
