import classes from "../../styles/shared/custom_button.module.css"

function CustomButton(props: any) {
    return <button className={classes.submitButton}>
        {props.text}
    </button>
}
 

export default CustomButton;