import styles from "./employees_section.module.css";

import sharedStyles from "../user profile/shared_style.module.css";
import EmployeeElement from "./employee_element";

export default function EmployeesSection(props: any) {
  return (
    <section className={styles.employeeSection}>
      <div className={sharedStyles.titleAndActions}>
        <div className={sharedStyles.title}>Our Employees</div>
      </div>
      <div className={styles.employees}>
        <EmployeeElement job="Recruiter" name="Mohammed" />
        <EmployeeElement job="Editor" name="Ahmad" />
        <EmployeeElement job="CEO" name="Abdullah" />
        <EmployeeElement job="CTO" name="Tareq" />
        <EmployeeElement job="Admin" name="Ibrahim" />
        <EmployeeElement job="Marketer" name="Khalil" />
      </div>
    </section>
  );
}
