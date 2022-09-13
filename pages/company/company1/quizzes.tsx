import Head from "next/head";
import { Fragment, useState } from "react";
import styles from "../../../styles/company profile/company_quizzes.module.css";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import { Button, Link } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CompanyQuizTile, {
  quizStatus,
} from "../../../components/quizzes/company_quiz_tile";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

enum periodFilters {
  all = "All",
  last24Hours = "Last 24 hours",
  last7Days = "Last 7 days",
  lastMonth = "Last Month",
  last6Months = "Last 6 Months",
}

export default function Quizzes() {
  const [status, setStatus] = useState(quizStatus.all);
  const [period, setPeriod] = useState(periodFilters.all);

  const handleStatusChange = (
    event: React.MouseEvent<HTMLElement>,
    newStatus: quizStatus | null
  ) => {
    if (newStatus !== null) setStatus(newStatus);
  };

  const handlePeriodChange = (
    event: React.MouseEvent<HTMLElement>,
    newPeriod: periodFilters | null
  ) => {
    if (newPeriod !== null) setPeriod(newPeriod);
  };

  return (
    <Fragment>
      <Head>
        <title>Quizzes</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.quizzesSection}>
        <div className={styles.searchAndAddContainer}>
          <input
            placeholder="Search for a quiz"
            className={styles.searchField}
          />
          <Link href="/create-a-quiz">
            <Button
              variant="contained"
              className={styles.addButton}
              endIcon={<AddIcon />}
            >
              Create a Quiz
            </Button>
          </Link>
        </div>
        <div className={styles.filters}>
          <div className={styles.filterColumn}>
            <span>Status</span>
            <ToggleButtonGroup
              color="primary"
              value={status}
              exclusive
              onChange={handleStatusChange}
              aria-label="Platform"
            >
              {Object.values(quizStatus).map((status, index) => (
                <ToggleButton
                  key={index}
                  size="small"
                  value={status}
                  className={styles.toggleButtonStyle}
                >
                  {status}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
          <div className={styles.filterColumn}>
            <span>Period</span>
            <ToggleButtonGroup
              color="primary"
              value={period}
              exclusive
              onChange={handlePeriodChange}
              aria-label="Platform"
            >
              {Object.values(periodFilters).map((status, index) => (
                <ToggleButton
                  key={index}
                  size="small"
                  value={status}
                  className={styles.toggleButtonStyle}
                >
                  {status}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </div>
        <div className={styles.quizzesList}>
          <CompanyQuizTile
            title="Behavioral Quiz"
            time={5}
            numberOfParticipants={3}
            jobTitle="Software Engineer"
            numberOfQuestions={7}
            maxGrade={30}
            startDate="25/03/2023 7:30AM"
            endDate="27/03/2023 11:59PM"
            createdDate="22/03/2023 11:59PM"
            status={quizStatus.active}
          />
          <CompanyQuizTile
            title="Behavioral Quiz"
            time={5}
            numberOfParticipants={3}
            jobTitle="Software Engineer"
            numberOfQuestions={7}
            maxGrade={30}
            startDate="25/03/2023 7:30AM"
            endDate="27/03/2023 11:59PM"
            createdDate="22/03/2023 11:59PM"
            status={quizStatus.ended}
          />
          <CompanyQuizTile
            title="Behavioral Quiz"
            time={5}
            numberOfParticipants={3}
            jobTitle="Software Engineer"
            numberOfQuestions={7}
            maxGrade={30}
            startDate="25/03/2023 7:30AM"
            endDate="27/03/2023 11:59PM"
            createdDate="22/03/2023 11:59PM"
            status={quizStatus.scheduled}
          />
        </div>
      </section>
    </Fragment>
  );
}
