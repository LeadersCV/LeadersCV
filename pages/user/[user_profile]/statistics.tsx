import { Fragment } from "react";
import UserHeader from "../../../components/headers and footers/user_header";
import FilterFields from "../../../components/user statistics/filter_fields";
import ProfileViews from "../../../components/user statistics/profile_views";
import styles from "../../../styles/user profile/user_statistics.module.css";

export default function UserStatistics() {
  return (
    <Fragment>
      <UserHeader />
      <section className={styles.mainContainer}>
        <FilterFields />
        <ProfileViews />
      </section>
    </Fragment>
  );
}
