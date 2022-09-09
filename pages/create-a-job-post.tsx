import Head from "next/head";
import { Fragment } from "react";
import UserOrCompanyHeader from "../components/headers and footers/user_or_company_header";
import styles from "../styles/create a job post/create_a_job_post.module.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";

export default function CreateAJobPostPage() {
  return (
    <Fragment>
      <Head>
        <title>Create A Job Post</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.createAJobPostSection}>
        <div className={styles.formSection}>
          <span>Title</span>
          <input
            className={styles.inputField}
            placeholder="Write your title here"
          />
        </div>
        <div className={styles.formSection}>
          <span>Job Desciption</span>
          <textarea
            className={styles.areaField}
            placeholder="Write your job description here"
          />
        </div>
        <div className={styles.formSection}>
          <span>Job Requirements</span>
          <textarea
            className={styles.areaField}
            placeholder="Write your job requirements here"
          />
        </div>
        <div className={styles.formSection}>
          <span>Job Responsibilities</span>
          <textarea
            className={styles.areaField}
            placeholder="Write your job responsibilities here"
          />
        </div>
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
