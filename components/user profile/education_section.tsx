import sharedStyles from "./shared_style.module.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Fab } from "@mui/material";
import EducationContainer from "./education_container";

export default function EducationSection(props: any) {
  return (
    <section className={sharedStyles.mainContainer}>
      <div className={sharedStyles.titleAndActions}>
        <div className={sharedStyles.title}>Education</div>
        {props.isDifferentUser ? null : (
          <span className={sharedStyles.actions}>
            <Fab size="small" aria-label="edit" color="primary">
              <AddIcon sx={{ color: "white" }} />
            </Fab>
            <Fab size="small" aria-label="edit" color="primary">
              <EditIcon sx={{ color: "white" }} />
            </Fab>
          </span>
        )}
      </div>
      <EducationContainer
        specialty="Software Engineering"
        university="King Fahad University Of Petroleum And Minerals"
        date="2016 - 2020"
        gpa="3.79"
      />
      <hr style={{ width: "50%", margin: "0px" }} />
      <EducationContainer
        specialty="Software Engineering"
        university="King Fahad University Of Petroleum And Minerals"
        date="2016 - 2020"
        gpa="3.79"
      />
      <hr style={{ width: "50%", margin: "0px" }} />
      <EducationContainer
        specialty="Software Engineering"
        university="King Fahad University Of Petroleum And Minerals"
        date="2016 - 2020"
        gpa="3.79"
      />
      <hr style={{ width: "50%", margin: "0px" }} />
      <EducationContainer
        specialty="Software Engineering"
        university="King Fahad University Of Petroleum And Minerals"
        date="2016 - 2020"
        gpa="3.79"
      />{" "}
      <hr style={{ width: "50%", margin: "0px" }} />
    </section>
  );
}
