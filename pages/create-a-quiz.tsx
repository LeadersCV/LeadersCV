import { Button } from "@mui/material";
import Head from "next/head";
import { Fragment } from "react";
import UserOrCompanyHeader from "../components/headers and footers/user_or_company_header";
import QuizQuestionForm from "../components/quizzes/quiz_question_form";
import styles from "../styles/create a quiz/company_create_a_quiz.module.css";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export default function CreateAQuizPage() {
  return (
    <Fragment>
      <Head>
        <title>Create A Quiz</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.createAQuizSection}>
        <div className={styles.quizTitle}>
          <span className={styles.Label}>Quiz title</span>
          <input
            className={styles.inputField}
            style={{ width: "100%" }}
            placeholder="Title"
          />
        </div>

        <div className={styles.dates}>
          <div className={styles.horizontalForm}>
            <span className={styles.formLabels}>Start date:</span>
            <input className={styles.inputField} placeholder="14/05/2022" />
          </div>
          <div className={styles.horizontalForm}>
            <span className={styles.formLabels}>End date:</span>
            <input className={styles.inputField} placeholder="17/05/2022" />
          </div>
        </div>

        <div className={styles.quizDetails}>
          <div className={styles.horizontalForm}>
            <span className={styles.formLabels}>Max Grade:</span>
            <input className={styles.inputField} placeholder="30" />
          </div>
          <div className={styles.horizontalForm}>
            <span className={styles.formLabels}>Duration:</span>
            <input className={styles.inputField} placeholder="20" />
            <span className={styles.formLabels}>mins</span>
          </div>
        </div>

        <div className={styles.participants}>
          <span className={styles.Label}>Participants</span>

          <div className={styles.addParticipantsRow}>
            <input
              className={styles.inputField}
              placeholder="Search for a user to invite them"
            />
            <Button variant="contained">Add</Button>
          </div>
        </div>

        <div className={styles.questions}>
          <QuizQuestionForm isFirst order="1" />
          <QuizQuestionForm isFirst={false} order="2" />
          <QuizQuestionForm isFirst={false} order="3" />
        </div>

        <div className={styles.actionsRow}>
          <Button variant="contained" color="error" startIcon={<ClearIcon />}>
            Cancel
          </Button>

          <Button variant="contained" startIcon={<AddIcon />}>
            Add A Question
          </Button>

          <Button variant="contained" startIcon={<CheckIcon />}>
            Create
          </Button>
        </div>
      </section>
    </Fragment>
  );
}
