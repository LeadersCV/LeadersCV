import classes from "./custom_text_field.module.css";

function CustomTextField(props: any) {
  return (
    <div className={classes.container}>
      <p className={classes.headtext}>{props.fieldName}</p>
      <input
        className={classes.textfield}
        type={props.type}
        placeholder={props.placeholder}
        spellCheck="false"
      ></input>
    </div>
  );
}

export default CustomTextField;
