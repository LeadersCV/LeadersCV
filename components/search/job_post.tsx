import { Avatar, Fab } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

import classes from "./job_post.module.css";

export default function JobPost(props: any) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.avatarTitle}>
          <Avatar />

          <h4>Software Engineer Needed</h4>
        </div>

        <div className={classes.actionButtons}>
          <Fab size="small" sx={{ bgcolor: "white" }} aria-label="bookmar">
            <BookmarkBorderIcon color="primary" />
          </Fab>
          <Fab size="small" sx={{ bgcolor: "white" }} aria-label="share">
            <ShareIcon color="primary" />
          </Fab>
        </div>
      </div>
      <p className={classes.content}>
        dsdfsdfsfsdsdsdsdsdsasdaweeqwewqewqeqwwwdsdsdssdssdsdssdsdsaddsadassdadasdasasewewqwqwewewqewqewqdcgdsfdlfksdidfjafkdjgfkdsjfkfjdk
      </p>
    </div>
  );
}
