import Suggestion from "./suggestion";
import classes from "./suggestions.module.css";

export default function Suggestions() {
  return (
    <div className={classes.mainContainer}>
      <h3>Popular Search Terms</h3>
      <div className={classes.termsContainer}>
        <Suggestion>Software Engineering</Suggestion>
        <Suggestion>Artificial Intelligence</Suggestion>
        <Suggestion>Finance</Suggestion>
        <Suggestion>STC</Suggestion>
        <Suggestion>Front End Development</Suggestion>
        <Suggestion>Marketing</Suggestion>
      </div>
    </div>
  );
}
