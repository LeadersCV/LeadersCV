import CountUp from "react-countup";
import classes from "./statistic_element.module.css";

export default function StatisticElement(props: any) {
  return (
    <div
      className={classes.statisticElement}
      data-aos={props.animation}
      data-aos-duration="1250"
      data-aos-offset="150"
    >
      <CountUp end={props.number} duration={1.5} className={classes.number} enableScrollSpy />
      <p className={classes.name}>{props.name} </p>
    </div>
  );
}
