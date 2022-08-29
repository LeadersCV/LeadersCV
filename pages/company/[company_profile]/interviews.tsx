import { Fragment } from "react";
import styles from "../../../styles/company profile/company_interviews.module.css";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import Head from "next/head";
import InterviewContainer, {
  InterviewType,
} from "../../../components/interviews/interview_container";

export default function CompanyInterviewsPage() {
  return (
    <Fragment>
      <Head>
        <title>Interviews</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.interviewsContainer}>
        <input placeholder="Search" className={styles.searchField} />
        <div className={styles.interviewsList}>
          <InterviewContainer
            interviewType={InterviewType[InterviewType.Phone]}
            date="2022/05/22"
          />
          <InterviewContainer interviewType="Face To Face" date="2022/05/22" />
          <InterviewContainer interviewType="Phone" date="2022/05/22" />
          <InterviewContainer interviewType="Zoom" date="2022/05/22" />
          <InterviewContainer
            interviewType={InterviewType[InterviewType.Face_To_Face].replaceAll(
              "_",
              " "
            )}
            date="2022/05/22"
          />
          <InterviewContainer
            interviewType="Phone Interview"
            date="2022/05/22"
          />
        </div>
      </section>
    </Fragment>
  );
}
