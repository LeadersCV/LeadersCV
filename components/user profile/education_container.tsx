import classes from "./education_container.module.css";

export default function EducationContainer(props: any) {
  return (
    <div className={classes.educationContainer}>
      <span className={classes.specialty}>{props.specialty}</span>
      <span className={classes.university}>{props.university}</span>
      <span className={classes.date}>{props.date}</span>
      <span className={classes.gpa}>GPA: {props.gpa}</span>
    </div>
  );
}
