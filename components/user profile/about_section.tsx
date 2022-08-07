import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import sharedStyles from "./shared_style.module.css";
import classes from "./about_section.module.css";

export default function AboutSection(props: any) {
  return (
    <section className={sharedStyles.mainContainer}>
      <div className={sharedStyles.titleAndActions}>
        <div className={sharedStyles.title}>About</div>
        {props.isDifferentUser ? null : (
          <Fab size="small" aria-label="edit" color="primary">
            <EditIcon sx={{ color: "white" }} />
          </Fab>
        )}
      </div>

      <p className={classes.aboutContent}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search
        for lorem ipsum will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).
      </p>
    </section>
  );
}
