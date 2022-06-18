import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, Typography } from "@mui/material";
import classes from "../../styles/home/faq.module.css";

export default function FAQElement(props: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="750"
      className={classes.accordion}
    >
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.question}>
            Q: {props.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.answer}> A: {props.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
