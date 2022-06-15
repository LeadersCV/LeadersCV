import classes from "../../styles/home/suggestion.module.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Suggestion(props: any) {
    return <div className={classes.container}>
        <p>{props.children}</p>
        <ArrowForwardIcon className={classes.icon} fontSize="large" />
    </div>
}