import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Fab,
  Typography,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LinkIcon from "@mui/icons-material/Link";
import classes from "./job_post.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            <LinkIcon color="primary" />
          </Fab>
        </div>
      </div>
      <p className={classes.content}>
        dsdfsdfsfsdsdsdsdsdsasdaweeqwewqewqeqwwwdsdsdssdssdsdssdsdsaddsadassdadasdasasewewqwqwewewqewqewqdcgdsfdlfksdidfjafkdjgfkdsjfkfjdk
      </p>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.question}>Requirements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.answer}>
            dsdfsdfsfsdsdsdsdsdsasdaweeqwewqewqeqwwwdsdsdssdssdsdssdsdsaddsadassdadasdasasewewqwqwewewqewqewqdcgdsfdlfksdidfjafkdjgfkdsjfkfjdk
            dsdfsdfsfsdsdsdsdsdsasdaweeqwewqewqeqwwwdsdsdssdssdsdssdsdsaddsadassdadasdasasewewqwqwewewqewqewqdcgdsfdlfksdidfjafkdjgfkdsjfkfjdk
            dsdfsdfsfsdsdsdsdsdsasdaweeqwewqewqeqwwwdsdsdssdssdsdssdsdsaddsadassdadasdasasewewqwqwewewqewqewqdcgdsfdlfksdidfjafkdjgfkdsjfkfjdk
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
