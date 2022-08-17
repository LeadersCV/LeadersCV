import { Avatar, Fab } from "@mui/material";
import Image from "next/image";
import classes from "../../../styles/user profile/user_profile.module.css";
import userCover from "../../../public/assets/user_cover.png";
import EditIcon from "@mui/icons-material/Edit";
import GuestHeader from "../../../components/headers and footers/guest_header";
import UserHeader from "../../../components/headers and footers/user_header";
import AboutSection from "../../../components/user profile/about_section";
import ExperienceTimeline from "../../../components/user profile/experience_timeline";
import EducationSection from "../../../components/user profile/education_section";
import SuggestionsSection from "../../../components/user profile/suggestions_section";
import SkillsSection from "../../../components/user profile/skills_section";
import InterestsSection from "../../../components/user profile/interests_section";
import ProjectsSection from "../../../components/user profile/projects_section";
import Head from "next/head";

export default function UserProfile() {
  return (
    <section className={classes.mainPage}>
      <Head>
        <title>Mohammeds Profile</title>
      </Head>
      {false ? <GuestHeader /> : <UserHeader />}
      <div className={classes.mainContainer}>
        <main className={classes.profileContainer}>
          <section className={classes.coverAndProfileSection}>
            <Image
              src={"/" + userCover.src}
              alt="cover"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "25px 25px 0px 0px",
              }}
              priority
            />
            <Avatar className={classes.profilePicture} />

            <Fab
              size="medium"
              aria-label="edit"
              className={classes.editCoverButton}
            >
              <EditIcon color="primary" />
            </Fab>
          </section>
          <section className={classes.detailsSection}>
            <span className={classes.fullName}> Mohammed K. Abu Arida</span>
            <span className={classes.jobTitle}>Software Engineer</span>
            <span className={classes.company}>Mham IT International</span>
          </section>
          <AboutSection isDifferentUser={false} />
          <ExperienceTimeline isDifferentUser={false} />
          <EducationSection isDifferentUser={false} />
          <ProjectsSection isDifferentUser={false} />
          <div className={classes.interestsAndSkils}>
            <InterestsSection isDifferentUser={false} />
            <SkillsSection isDifferentUser={false} />
          </div>
        </main>
        <SuggestionsSection />
      </div>
    </section>
  );
}
