import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "./country_code_picker";
import classes from "./custom_text_field.module.css";

export default function CountryPicker(props: any) {
  return (
    <div>
      <p className={classes.headtext}>{props.fieldName}</p>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: "100%", backgroundColor: "#f6f6f6", height: "60px" }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        defaultValue={countries.find((country) => country.phone == "966")}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}
