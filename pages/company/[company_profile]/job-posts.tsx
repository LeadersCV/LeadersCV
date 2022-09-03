import { Fragment, useState } from "react";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import styles from "../../../styles/company profile/company_job_posts.module.css";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import CompanyJobPost, {
  jobLocation,
  jobPostStatus,
  jobType,
} from "../../../components/company job posts/company_job_post";
import Head from "next/head";

const periods: Array<string> = [
  "All",
  "Last 24 hours",
  "Last 7 days",
  "Last Month",
  "Last 6 Months",
];

export default function CompanyJobPostsPage() {
  const [status, setStatus] = useState("All");
  const [period, setPeriod] = useState(jobPostStatus.all);

  const handleStatusChange = (
    event: React.MouseEvent<HTMLElement>,
    newStatus: string | null
  ) => {
    if (newStatus !== null) setStatus(newStatus);
  };

  const handleTimeChange = (
    event: React.MouseEvent<HTMLElement>,
    newPeriod: jobPostStatus | null
  ) => {
    if (newPeriod !== null) setPeriod(newPeriod);
  };

  return (
    <Fragment>
      <Head>
        <title>Job Posts</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.jobPostsContainer}>
        <input placeholder="Search" className={styles.searchField} />
        <div className={styles.filters}>
          <div className={styles.filterColumn}>
            <span>Period</span>
            <ToggleButtonGroup
              color="primary"
              value={status}
              exclusive
              onChange={handleStatusChange}
              aria-label="status"
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "#002463",
                  color: "white",
                },
                "& .Mui-ToggleButton": {
                  backgroundColor: "#002463",
                  color: "white",
                },
                "& .Mui-selected:hover": {
                  backgroundColor: "#002463",
                  color: "white",
                },
              }}
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
          </div>
          <div className={styles.filterColumn}>
            <span>Status</span>
            <ToggleButtonGroup
              color="primary"
              value={period}
              exclusive
              onChange={handleTimeChange}
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "#002463",
                  color: "white",
                },
                "& .Mui-ToggleButton": {
                  backgroundColor: "#002463",
                  color: "white",
                },
                "& .Mui-selected:hover": {
                  backgroundColor: "#002463",
                  color: "white",
                },
              }}
              aria-label="Platform"
            >
              {Object.values(jobPostStatus).map((status, index) => (
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
        <div className={styles.jobPostsList}>
          <CompanyJobPost
            title="Software Engineer"
            location={jobLocation.onSite}
            type={jobType.fullTime}
            status={jobPostStatus.active}
            numberOfPoepleApplied={53}
            publishedDate="2022/05/21"
          />
          <CompanyJobPost
            title="Marketer"
            location={jobLocation.onSite}
            type={jobType.partTime}
            status={jobPostStatus.cancelled}
            numberOfPoepleApplied={0}
            publishedDate="2022/05/22"
          />
          <CompanyJobPost
            title="Accountant"
            location={jobLocation.hybrid}
            type={jobType.fullTime}
            status={jobPostStatus.inActive}
            numberOfPoepleApplied={24}
            publishedDate="2022/05/23"
          />
        </div>
      </section>
    </Fragment>
  );
}
