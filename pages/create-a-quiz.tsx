import Head from "next/head";
import { Fragment } from "react";
import UserOrCompanyHeader from "../components/headers and footers/user_or_company_header";
import styles from "../styles/create a quiz/company_create_a_quiz.module.css";

export default function CreateAQuizPage() {
  return (
    <Fragment>
      <Head>
        <title>Create A Quiz</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.createAQuizSection}></section>
    </Fragment>
  );
}
