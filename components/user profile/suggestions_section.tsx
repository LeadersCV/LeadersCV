import JobSuggestion from "./job_suggestion";
import ProjectMemberSuggestion from "./project_member_suggestion";
import classes from "./suggestions_section.module.css";

export default function SuggestionsSection() {
  return (
    <section className={classes.mainSection}>
      <div className={classes.container}>
        <h3>Available Jobs</h3>
        <JobSuggestion job="Flutter Developer" company="Amazon" />
        <JobSuggestion job="Software Engineer" company="Google" />
        <JobSuggestion job="Java Developer" company="Oracle" />
        <JobSuggestion job="Laravel Developer" company="Mham" />
      </div>
      <div className={classes.container}>
        <h3>Project Member Suggestions</h3>
        <ProjectMemberSuggestion name="Ibrahim" job="Developer" />
        <ProjectMemberSuggestion name="Mohammed" job="Recruiter" />
        <ProjectMemberSuggestion name="Khalil" job="Manager" />
      </div>
    </section>
  );
}
