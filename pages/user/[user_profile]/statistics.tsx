import Head from "next/head";
import { Fragment } from "react";
import UserHeader from "../../../components/headers and footers/user_header";
import StatisticContainer from "../../../components/shared/statistic_container";
import CompanyTypesApplied from "../../../components/user statistics/company_types_applied";
import StatisticsFilterFields from "../../../components/shared/statistics_filter_fields";
import JobTypesApplied from "../../../components/user statistics/job_types_applied";
import ProfileViews from "../../../components/shared/profile_views";
import styles from "../../../styles/user profile/user_statistics.module.css";

export default function UserStatistics() {
  return (
    <Fragment>
      <Head>
        <title>User Statistics</title>
      </Head>
      <UserHeader />
      <section className={styles.mainContainer}>
        <StatisticsFilterFields />
        <ProfileViews header="User Profile Visits" />
        <div className={styles.chartsRow}>
          <JobTypesApplied />
          <CompanyTypesApplied />
        </div>
        <div className={styles.statisticsNumbers}>
          <StatisticContainer title="Impressions" statistic="24%" />
          <StatisticContainer title="Jobs Applied" statistic="154" />
          <StatisticContainer title="Blogs Created" statistic="3" />
        </div>
      </section>
    </Fragment>
  );
}
