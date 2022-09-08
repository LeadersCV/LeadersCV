import Head from "next/head";
import { Fragment } from "react";
import UserOrCompanyHeader from "../components/headers and footers/user_or_company_header";
import styles from "./../styles/create an interview/create_an_interview.module.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";

export default function CreateAnInterviewPage() {
  return (
    <Fragment>
      <Head>
        <title>Create an Interview</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.createAnInterviewSection}>
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
