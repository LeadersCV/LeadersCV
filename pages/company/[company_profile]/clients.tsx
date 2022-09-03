import Head from "next/head";
import { Fragment } from "react";
import styles from "../../../styles/company profile/company_clients.module.css";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";

export default function CompanyClientsPage() {
  return (
    <Fragment>
      <Head>
        <title>Clients</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.clientsContainer}>
        <input placeholder="Search" className={styles.searchField} />
        <div className={styles.filters}></div>
        <div className={styles.listOfClients}></div>
      </section>
    </Fragment>
  );
}
