import classes from "../../styles/home/statistic_element.module.css";

export default function StatisticElement(props: any) {
  return (
    <div
      className={classes.statisticElement}
      data-aos={props.animation}
      data-aos-duration="1250"
      data-aos-offset="150"
    >
      <p className={classes.number}>{props.number}</p>
      <p className={classes.name}>{props.name} </p>
    </div>
  );
}
