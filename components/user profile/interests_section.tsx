import { Chip, Fab } from "@mui/material";
import sharedStyles from "./shared_style.module.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CodeIcon from "@mui/icons-material/Code";
import MonitorIcon from "@mui/icons-material/Monitor";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PieChartIcon from "@mui/icons-material/PieChart";
import FunctionsIcon from "@mui/icons-material/Functions";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

export default function InterestsSection(props: any) {
  return (
    <section className={sharedStyles.mainContainer}>
      <div className={sharedStyles.titleAndActions}>
        <div className={sharedStyles.title}>Interests</div>
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
          label="Software"
          icon={<CodeIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="Web Development"
          icon={<MonitorIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="Mobile App Development"
          icon={<SmartphoneIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="Algorithms"
          icon={<FunctionsIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="Statistics"
          icon={<PieChartIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
        <Chip
          label="Data Science"
          icon={<QueryStatsIcon />}
          color="primary"
          className={sharedStyles.interestAndSkillChips}
        />
      </div>
    </section>
  );
}
