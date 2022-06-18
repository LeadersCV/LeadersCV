import classes from "./statistics.module.css";
import StatisticElement from "./statistic_element";
import "aos/dist/aos.css";

export default function Statistics() {
  return (
    <section className={classes.mainContainer}>
      <StatisticElement
        animation={"fade-right"}
        number={5483}
        name="Employees in KSA"
      />
      <StatisticElement
        animation={"fade-up"}
        number={150}
        name="Job Applications Posted"
      />
      <StatisticElement
        animation={"fade-left"}
        number={25}
        name="Companies Registered"
      />
    </section>
  );
}
