import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Fab, Typography } from "@mui/material";
import classes from "./selected_job_post.module.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LinkIcon from "@mui/icons-material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function SelectedJobPost(props: any) {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <Avatar  sx={{ width: 70, height: 70 }}/>
        <div className={classes.headline}>
        <span className={classes.title}>software developer</span>
        <span className={classes.date}>5 hrs ago</span>
        </div>
        
        <div className={classes.actionButtons}>
        <Button variant="contained" size="small" className={classes.applyButton}>Apply</Button>
          <Fab size="small" sx={{ bgcolor: "white" }} aria-label="bookmar">
            <BookmarkBorderIcon color="primary" />
          </Fab>
          <Fab size="small" sx={{ bgcolor: "white" }} aria-label="share">
            <LinkIcon color="primary" />
          </Fab>
        </div>
      </div>
      <p className={classes.content}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p className={classes.content}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      

      <Accordion TransitionProps={{ unmountOnExit: true }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.question}>
            Job Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.question}>
       Job Requirements
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
    
        >
          <Typography className={classes.question}>
            Job Responsibilities
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
