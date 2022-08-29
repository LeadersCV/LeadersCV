import Head from "next/head";
import { Fragment } from "react";
import EmployeeElement from "../../../components/company profile/employee_element";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import styles from "../../../styles/company profile/company_employees.module.css";

export default function CompanyEmployees() {
  return (
    <Fragment>
      <Head>
        <title>Employees</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.employeesContainer}>
        <input placeholder="Search" className={styles.searchField} />
        <div className={styles.listOfEmployees}>
          <EmployeeElement name="hello" job="Software Engineer" />
          <EmployeeElement name="hello" job="Writer" />
          <EmployeeElement name="hello" job="Author" />
          <EmployeeElement name="hello" job="Recruiter" />
          <EmployeeElement name="hello" job="Software Engineer" />
          <EmployeeElement name="hello" job="Software Engineer" />
          <EmployeeElement name="hello" job="Software Engineer" />
          <EmployeeElement name="hello" job="Software Engineer" />
        </div>
      </section>
    </Fragment>
  );
}
