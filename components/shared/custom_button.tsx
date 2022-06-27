import classes from "./custom_button.module.css";

function CustomButton(props: any) {
  return (
    <button
      style={{
        margin: props.margin,
        width: props.width,
      }}
      className={
        props.isDisabled ? classes.disabledButton : classes.submitButton
      }
      disabled={props.isDisabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default CustomButton;
