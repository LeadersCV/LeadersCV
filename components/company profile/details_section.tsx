import styles from "./details_section.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PersonIcon from "@mui/icons-material/Person";

export default function DetailsSection() {
  return (
    <section className={styles.detailsSection}>
      <span className={styles.company}>Mham International Company</span>
      <span className={styles.industry}>Information Technology</span>
      <div className={styles.moreInfo}>
        <FmdGoodIcon fontSize="medium" color="primary" />
        <span>Riyadh - Saudi Arabia</span>
        <PersonIcon fontSize="medium" color="primary" />
        <span>500 - 1000</span>
      </div>
      <div className={styles.socialMedia}>
        <FacebookIcon fontSize="large" color="primary" />
        <TwitterIcon fontSize="large" color="primary" />
        <InstagramIcon fontSize="large" color="primary" />
        <LinkedInIcon fontSize="large" color="primary" />
      </div>
    </section>
  );
}
