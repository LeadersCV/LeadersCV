import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { useState } from "react";
import classes from "./filters.module.css";

export default function Filters() {
  const [selectedValue, setSelectedValue] = useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
    sx: {
      color: "white",
      "&.Mui-checked": {
        color: "#FCB730",
      },
    },
  });

  return (
    <section className={classes.container}>
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Date Posted
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="24"
          name="radio-buttons-group"
        >
          <FormControlLabel
             sx={{ color: "white" , '& .MuiFormControlLabel-label': {
              fontSize: "13px"
             }, }}
            value="1"
            control={<Radio {...controlProps("1")} />}
            label="Last 24 hours"
          />
          <FormControlLabel
              sx={{ color: "white" , '& .MuiFormControlLabel-label': {
                fontSize: "13px"
               }, }}
            value="7"
            control={<Radio {...controlProps("7")} />}
            label="Last 7 days"
          />
          <FormControlLabel
             sx={{ color: "white" , '& .MuiFormControlLabel-label': {
              fontSize: "13px"
             }, }}
            value="14"
            control={<Radio {...controlProps("14")} />}
            label="Last 14 days"
          />
          <FormControlLabel
              sx={{ color: "white" , '& .MuiFormControlLabel-label': {
                fontSize: "13px"
               }, }}
            value="30"
            control={<Radio {...controlProps("30")} />}
            label="Last month"
          />
          <FormControlLabel
                sx={{ color: "white" , '& .MuiFormControlLabel-label': {
                  fontSize: "13px"
                 }, }}
            value="180"
            control={<Radio {...controlProps("180")} />}
            label="Last 6 months"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Salary Range
        </FormLabel>
        <Slider
          defaultValue={6500}
          valueLabelDisplay="off"
          min={2000}
          max={15000}
          style={{
            width: "80%",
            margin: "15px auto",
          }}
          color="secondary"
          step={500}
        />
      </FormControl>
      <FormGroup>
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Job Type
        </FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "#FCB730",
                },
              }}
              defaultChecked
            />
          }
          sx={{ color: "white" , '& .MuiFormControlLabel-label': {
           fontSize: "13px"
          }, }}
          label="Full Time"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "#FCB730",
                },
              }}
            />
          }
          sx={{ color: "white" , '& .MuiFormControlLabel-label': {
            fontSize: "13px"
           }, }}
          label="Part Time"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "#FCB730",
                },
              }}
            />
          }
          sx={{ color: "white" , '& .MuiFormControlLabel-label': {
            fontSize: "13px"
           }, }}
          label="Contract"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Job Location
        </FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "#FCB730",
                },
              }}
              defaultChecked
            />
          }
          sx={{ color: "white" , '& .MuiFormControlLabel-label': {
            fontSize: "13px"
           }, }}
          label="On Site"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "#FCB730",
                },
              }}
            />
          }
          sx={{ color: "white" , '& .MuiFormControlLabel-label': {
            fontSize: "13px"
           }, }}
          label="Remote"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "#FCB730",
                },
              }}
            />
          }
          sx={{ color: "white" , '& .MuiFormControlLabel-label': {
            fontSize: "13px"
           }, }}
          label="Hybrid"
        />
      </FormGroup>
    </section>
  );
}
