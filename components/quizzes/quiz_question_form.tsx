import { FormControlLabel, IconButton, Radio, RadioGroup } from "@mui/material";
import styles from "./quiz_question_form.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";

interface QuizQuestion {
  isFirst: boolean;
  order: string;
}

export default function QuizQuestionForm({ isFirst, order }: QuizQuestion) {
  return (
    <div className={styles.questionContainer}>
      <div className={styles.singleQuestion}>
        <div className={styles.questionForm}>
          <span className={styles.questionLabel}>{order}.</span>
          <textarea className={styles.areaField} />
        </div>

        <span className={styles.answerLabel}>Answers</span>
        <div className={styles.answersGroup}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <div className={styles.answerTile}>
              <span>1.</span>
              <input className={styles.inputField} />
              <FormControlLabel value="1" control={<Radio />} label="Correct" />
            </div>
            <div className={styles.answerTile}>
              <span>2.</span> <input className={styles.inputField} />
              <FormControlLabel value="2" control={<Radio />} label="Correct" />
            </div>
            <div className={styles.answerTile}>
              <span>3.</span> <input className={styles.inputField} />
              <FormControlLabel value="3" control={<Radio />} label="Correct" />
            </div>
            <div className={styles.answerTile}>
              <span>4.</span> <input className={styles.inputField} />
              <FormControlLabel value="4" control={<Radio />} label="Correct" />
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className={styles.actionsColumn}>
        <IconButton aria-label="delete">
          <ClearIcon color="primary" />
        </IconButton>
        {isFirst ? null : (
          <IconButton aria-label="delete">
            <DeleteIcon color="primary" />
          </IconButton>
        )}
      </div>
    </div>
  );
}
