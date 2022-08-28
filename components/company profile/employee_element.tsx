import { Avatar } from "@mui/material";
import styles from "./employee_element.module.css";

export default function EmployeeElement(props: any) {
  const { name, job } = props;

  return (
    <div className={styles.container}>
      <Avatar sx={{ height: "100px", width: "100px" }} />
      <span className={styles.name}>{name} </span>
      <span className={styles.job}>{job}</span>
    </div>
  );
}
