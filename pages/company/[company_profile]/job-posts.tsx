import { Fragment, useState } from "react";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import styles from "../../../styles/company profile/company_job_posts.module.css";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import CompanyJobPost from "../../../components/company job posts/company_job_post";

const periods: Array<string> = [
  "All",
  "Last 24 hours",
  "Last 7 days",
  "Last Month",
  "Last 6 Months",
];

const allStatus: Array<string> = [
  "All",
  "Cancelled",
  "Active",
  "Inactive",
  "Hidden",
];

export default function CompanyJobPostsPage() {
  const [status, setStatus] = useState("ALL");
  const [period, setPeriod] = useState("All");

  const handleStatusChange = (
    event: React.MouseEvent<HTMLElement>,
    newStatus: string
  ) => {
    setStatus(newStatus);
  };

  const handleTimeChange = (
    event: React.MouseEvent<HTMLElement>,
    newPeriod: string
  ) => {
    setPeriod(newPeriod);
  };

  return (
    <Fragment>
      <UserOrCompanyHeader isCompany />
      <section className={styles.jobPostsContainer}>
        <input placeholder="Search" className={styles.searchField} />
        <div className={styles.filters}>
          <ToggleButtonGroup
            color="primary"
            value={status}
            exclusive
            onChange={handleStatusChange}
            aria-label="Platform"
          >
            {periods.map((period, index) => (
              <ToggleButton
                key={index}
                size="small"
                value={period}
                className={styles.toggleButtonStyle}
              >
                {period}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={period}
            exclusive
            onChange={handleTimeChange}
            aria-label="Platform"
          >
            {allStatus.map((status, index) => (
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
        <div className={styles.jobPostsList}>
          <CompanyJobPost title="Software Engineer" />
          <CompanyJobPost title="Marketer" />
          <CompanyJobPost title="Accountant" />
        </div>
      </section>
    </Fragment>
  );
}
