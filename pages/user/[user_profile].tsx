import { Avatar, Badge, Fab } from "@mui/material";
import Image from "next/image";
import GuestHeader from "../../components/headers and footers/guest_header";
import classes from "../../styles/user profile/user_profile.module.css";
import userCover from "../../public/assets/user_cover.png";
import EditIcon from "@mui/icons-material/Edit";

export default function UserProfile() {
  return (
    <section className={classes.mainPage}>
      <GuestHeader />
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
      <section className={classes.about}>
        <div>About</div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </section>
    </section>
  );
}
