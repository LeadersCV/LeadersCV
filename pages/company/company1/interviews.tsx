import { Fragment, useState } from "react";
import styles from "../../../styles/company profile/company_interviews.module.css";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import Head from "next/head";
import { Button, Link } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import InterviewContainer, {
  InterviewType,
} from "../../../components/company interviews/interview_container";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

export default function CompanyInterviewsPage() {
  const [status, setStatus] = useState("ALL");
  const [period, setPeriod] = useState("All");

  const handleStatusChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setStatus(newAlignment);
  };

  const handleTimeChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setPeriod(newAlignment);
  };

  return (
    <Fragment>
      <Head>
        <title>Interviews</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.interviewsContainer}>
        <div className={styles.searchAndAddContainer}>
          <input placeholder="Search" className={styles.searchField} />
          <Link href="/create-an-interview">
            <Button
              variant="contained"
              className={styles.addButton}
              endIcon={<AddIcon />}
            >
              Create an interview
            </Button>
          </Link>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterColumn}>
            <span>Period</span>
            <ToggleButtonGroup
              color="primary"
              value={status}
              exclusive
              onChange={handleStatusChange}
              aria-label="Platform"
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "#002463",
                  color: "white",
                },
                "& .Mui-selected:hover": {
                  backgroundColor: "#002463",
                  color: "white",
                },
              }}
            >
              <ToggleButton size="small" value="ALL">
                ALL
              </ToggleButton>
              <ToggleButton size="small" value="Next 24 hours">
                Next 24 hours
              </ToggleButton>
              <ToggleButton size="small" value="Next 7 days">
                Next 7 days
              </ToggleButton>
              <ToggleButton size="small" value="Next Month">
                Next Month
              </ToggleButton>
              <ToggleButton size="small" value="Last 24 hours">
                Last 24 hours
              </ToggleButton>
              <ToggleButton size="small" value="Last 7 days">
                Last 7 days
              </ToggleButton>
              <ToggleButton size="small" value="Last Month">
                Last Month
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className={styles.filterColumn}>
            <span>Status</span>
            <ToggleButtonGroup
              color="primary"
              value={period}
              exclusive
              onChange={handleTimeChange}
              aria-label="Platform"
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "#002463",
                  color: "white",
                },
                "& .Mui-selected:hover": {
                  backgroundColor: "#002463",
                  color: "white",
                },
              }}
            >
              <ToggleButton size="small" value="All">
                All
              </ToggleButton>
              <ToggleButton size="small" value="Cancelled">
                Cancelled
              </ToggleButton>
              <ToggleButton size="small" value="Scheduled">
                Scheduled
              </ToggleButton>
              <ToggleButton size="small" value="Done">
                Done
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div className={styles.interviewsList}>
          <InterviewContainer
            interviewType={InterviewType.Phone}
            date="2022/05/22 7:30 AM"
            intervieweeName="Mohammed Abu-Arida"
            isScheduled
          />
          <InterviewContainer
            interviewType={InterviewType.Face_To_Face}
            date="2022/05/22 7:30 AM"
            intervieweeName="Mohammed Abu-Arida"
          />
          <InterviewContainer
            interviewType={InterviewType.Zoom}
            date="2022/05/22 7:30 AM"
            intervieweeName="Mohammed Abu-Arida"
            isCancelled
          />
          <InterviewContainer
            interviewType={InterviewType.Phone}
            date="2022/05/22 7:30 AM"
            intervieweeName="Mohammed Abu-Arida"
          />
          <InterviewContainer
            interviewType={InterviewType.Face_To_Face}
            date="2022/05/22 7:30 AM"
            intervieweeName="Mohammed Abu-Arida"
          />
          <InterviewContainer
            interviewType={InterviewType.Zoom}
            date="2022/05/22 7:30 AM"
            intervieweeName="Mohammed Abu-Arida"
          />
        </div>
      </section>
    </Fragment>
  );
}
