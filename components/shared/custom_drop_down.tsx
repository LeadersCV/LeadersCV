import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./custom_drop_down.module.css";

export default function CustomDropDown(props: any) {
  const [value, setValue] = React.useState<string | null>(props.options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className={classes.container}>
      <p className={classes.headtext}>{props.fieldName}</p>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={props.options}
        renderInput={(params) => (
          <TextField
            className={classes.textfield}
            {...params}
            label={props.label}
          />
        )}
      />
    </div>
  );
}
