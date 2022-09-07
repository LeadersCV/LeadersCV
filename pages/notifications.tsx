import Head from "next/head";
import { Fragment } from "react";
import UserOrCompanyHeader from "../components/headers and footers/user_or_company_header";
import NotificationsFilter from "../components/notifications/notifications_filter";
import NotificationTile, {
  notificationType,
} from "../components/notifications/notification_tile";
import styles from "../styles/notifications/notifications.module.css";

export default function NotificationsPage() {
  return (
    <Fragment>
      <Head>
        <title>Notifications</title>
      </Head>
      <UserOrCompanyHeader />
      <section className={styles.notificationsSection}>
        <NotificationsFilter />
        <div className={styles.notificationsList}>
          <NotificationTile
            time="24s"
            title="You applied for Software Engineer"
            type={notificationType.job}
            isRead={true}
          />
          <NotificationTile
            time="24s"
            title="Please verify your email address"
            type={notificationType.warning}
            isRead={false}
          />
          <NotificationTile
            time="24s"
            title="Company viewed your application"
            type={notificationType.company}
            isRead={true}
          />
          <NotificationTile
            time="24s"
            title="Mohammed has viewed your application"
            type={notificationType.user}
            isRead={true}
          />
          <NotificationTile
            time="24s"
            title="This is the first notification"
            type={notificationType.job}
            isRead={true}
          />
          <NotificationTile
            time="24s"
            title="This is the first notification"
            type={notificationType.job}
            isRead={true}
          />
          <NotificationTile
            time="24s"
            title="This is the first notification"
            type={notificationType.job}
            isRead={true}
          />
          <NotificationTile
            time="24s"
            title="This is the first notification"
            type={notificationType.job}
            isRead={true}
          />
          <NotificationTile
            time="24s"
            title="This is the first notification"
            type={notificationType.job}
            isRead={true}
          />
          <NotificationTile
            time="24s"
            title="This is the first notification"
            type={notificationType.job}
            isRead={true}
          />
          <NotificationTile
            time="24s"
            title="This is the first notification"
            type={notificationType.job}
            isRead={true}
          />
        </div>
      </section>
    </Fragment>
  );
}
