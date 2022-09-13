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
          <EmployeeElement
            areActionsIncluded
            name="hello"
            job="Software Engineer"
          />
          <EmployeeElement areActionsIncluded name="hello" job="Writer" />
          <EmployeeElement areActionsIncluded name="hello" job="Author" />
          <EmployeeElement areActionsIncluded name="hello" job="Recruiter" />
          <EmployeeElement
            areActionsIncluded
            name="hello"
            job="Software Engineer"
          />
          <EmployeeElement
            areActionsIncluded
            name="hello"
            job="Software Engineer"
          />
          <EmployeeElement
            areActionsIncluded
            name="hello"
            job="Software Engineer"
          />
          <EmployeeElement
            areActionsIncluded
            name="hello"
            job="Software Engineer"
          />
          <EmployeeElement
            areActionsIncluded
            name="hello"
            job="Software Engineer"
          />
          <EmployeeElement
            areActionsIncluded
            name="hello"
            job="Software Engineer"
          />
        </div>
      </section>
    </Fragment>
  );
}
