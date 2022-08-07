import { Fab, Chip } from "@mui/material";
import sharedStyles from "./shared_style.module.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DataArrayIcon from "@mui/icons-material/DataArray";

export default function SkillsSection(props: any) {
  return (
    <section className={sharedStyles.mainContainer}>
      <div className={sharedStyles.titleAndActions}>
        <div className={sharedStyles.title}>Skills</div>
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
      <div className={sharedStyles.wrapContainer}>
        <Chip
          label="Front End Web Development"
          icon={<CodeIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="HTML"
          icon={<HtmlIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="CSS"
          icon={<CssIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="Javascript"
          icon={<JavascriptIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="Django"
          icon={<DataArrayIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="Python"
          icon={<DataObjectIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="Flutter"
          icon={<FlutterDashIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
      </div>
    </section>
  );
}
