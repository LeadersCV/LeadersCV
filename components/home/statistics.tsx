import classes from "../../styles/home/statistics.module.css"
import StatisticElement from "./statistic_element"

export default function Statistics() {
    return <section className={classes.mainContainer}>
        <StatisticElement number={5483} name="Employees in KSA" />
        <StatisticElement number={150} name="Job Applications Posted" />
        <StatisticElement number={25} name="Companies Registered" />
    </section>
} 