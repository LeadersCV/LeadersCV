import Head from "next/head";
import { Fragment, useState } from "react";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import styles from "../../../styles/company profile/company_blogs.module.css";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import SingleBlog from "../../../components/blogs/single_blog";

enum periodFilters {
  all = "All",
  last24Hours = "Last 24 hours",
  last7Days = "Last 7 days",
  lastMonth = "Last Month",
  last6Months = "Last 6 Months",
}

export default function CompanyBlogsPage() {
  const [period, setPeriod] = useState(periodFilters.all);

  const handlePeriodChange = (
    event: React.MouseEvent<HTMLElement>,
    newPeriod: periodFilters | null
  ) => {
    if (newPeriod !== null) setPeriod(newPeriod);
  };

  return (
    <Fragment>
      <Head>
        <title>Company Blogs</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.blogsContainer}>
        <input placeholder="Search" className={styles.searchField} />
        <div className={styles.filters}>
          <div className={styles.filters}>
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
        </div>
        <div className={styles.listOfBlogs}>
          <SingleBlog
            title="Software Engineering Paradigm"
            content="dsdsds"
            publishedAt="7 days ago"
            views={25}
            writtenBy="Khalil"
          />
          <SingleBlog
            title="Software Engineering Paradigm"
            content="dsdsds"
            publishedAt="2 days ago"
            views={32}
            writtenBy="Mohammed"
          />
          <SingleBlog
            title="Software Engineering Paradigm"
            content="dsdsds"
            publishedAt="2 days ago"
            views={32}
            writtenBy="Mohammed"
          />
        </div>
      </section>
    </Fragment>
  );
}
