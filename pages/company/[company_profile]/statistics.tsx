import Head from "next/head";
import ProfileViews from "../../../components/shared/profile_views";
import StatisticContainer from "../../../components/shared/statistic_container";
import StatisticsFilterFields from "../../../components/shared/statistics_filter_fields";
import styles from "../../../styles/company profile/company_statistics.module.css";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";

export default function CompanySettings() {
  return (
    <div>
      <Head>
        <title>Company Statistics</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.mainContainer}>
        <StatisticsFilterFields />
        <ProfileViews header="Company Profile Views" />
        <div className={styles.statisticsNumbers}>
          <StatisticContainer title="Unique Visitors" statistic="325" />
          <StatisticContainer title="New Hires" statistic="2" />
          <StatisticContainer
            title="Highest Applicants Number"
            statistic="25"
          />
        </div>
        <div className={styles.statisticsNumbers}>
          <StatisticContainer title="Impressions" statistic="24%" />
          <StatisticContainer title="Applications Created" statistic="12" />
          <StatisticContainer title="Blogs Created" statistic="6" />
        </div>
      </section>
    </div>
  );
}
