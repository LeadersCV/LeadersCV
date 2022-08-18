import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CustomTextField from "../shared/custom_text_field";
import styles from "./social_media_section.module.css";

export default function SocialMediaSection() {
  return (
    <section className={styles.socialMediaContainer}>
      <div className={styles.socialMediaTile}>
        <FacebookIcon fontSize="large" color="primary" />
        <span>Facebook</span>
        <CustomTextField
          dontShowFieldName
          placeholder="E.g.: www.facebook.com/url"
        />
      </div>
      <div className={styles.socialMediaTile}>
        <TwitterIcon fontSize="large" color="primary" />
        <span>Twitter</span>
        <CustomTextField dontShowFieldName placeholder="www.twitter.com/xxxx" />
      </div>
      <div className={styles.socialMediaTile}>
        <InstagramIcon fontSize="large" color="primary" />
        <span>Instagram</span>
        <CustomTextField
          dontShowFieldName
          placeholder="www.instagram.com/xxxx"
        />
      </div>
    </section>
  );
}
