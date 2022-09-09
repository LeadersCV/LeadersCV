import Head from "next/head";
import { Fragment } from "react";
import UserOrCompanyHeader from "../components/headers and footers/user_or_company_header";
import styles from "./../styles/create an interview/create_an_interview.module.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { InterviewType } from "../components/company interviews/interview_container";

export default function CreateAnInterviewPage() {
  return (
    <Fragment>
      <Head>
        <title>Create an Interview</title>
      </Head>
      <UserOrCompanyHeader isCompany />

      <section className={styles.createAnInterviewSection}>
        <div className={styles.interviewerSection}>
          <span className={styles.labels}>Interviewer(s):</span>
          <div className={styles.searchAndAddRow}>
            <input
              placeholder="Search for an employee"
              className={styles.inputField}
              style={{ width: "50%" }}
            />
            <Button variant="contained">Add</Button>
          </div>
        </div>

        <div className={styles.interviewerSection}>
          <span className={styles.labels}>Interviewee:</span>
          <div className={styles.searchAndAddRow}>
            <input
              placeholder="Search for a recent job applicant"
              className={styles.inputField}
              style={{ width: "50%" }}
            />
            <Button variant="contained">Add</Button>
          </div>
        </div>
        <FormControl>
          <span className={styles.labels}> Interview Type:</span>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={InterviewType.Phone}
            name="radio-buttons-group"
            className={styles.radioOptions}
          >
            {Object.values(InterviewType).map((interview, key) => (
              <FormControlLabel
                key={key}
                value={interview}
                control={<Radio />}
                label={interview}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <div className={styles.scheduleRow}>
          <span className={styles.labels}>Schedule at:</span>
          <input
            placeholder="23/05/2015 7:30AM"
            className={styles.inputField}
          />
        </div>
        <span className={styles.notice}>
          A notification will be sent to both the interviewee and the
          interviewer(s)
        </span>
        <div className={styles.actionsRow}>
          <Button variant="contained" color="error" startIcon={<ClearIcon />}>
            Cancel
          </Button>
          <Button variant="contained" startIcon={<CheckIcon />}>
            Create
          </Button>
        </div>
      </section>
    </Fragment>
  );
}
