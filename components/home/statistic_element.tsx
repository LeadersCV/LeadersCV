import classes from '../../styles/home/statistic_element.module.css'

export default function StatisticElement(props: any) {
    return <div className={classes.statisticElement}>
        <p className={classes.number}>{props.number}</p>
        <p className={classes.name}>{props.name} </p>
    </div>
}