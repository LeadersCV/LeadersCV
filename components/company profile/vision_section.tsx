import styles from "./vision_section.module.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Fab } from "@mui/material";
import sharedStyles from "../user profile/shared_style.module.css";

export default function VisionSection(props: any) {
  return (
    <section className={styles.visionSection}>
      <div className={sharedStyles.titleAndActions}>
        <div className={sharedStyles.title}>Our Vision</div>
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
      <p className={styles.vision}>
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
