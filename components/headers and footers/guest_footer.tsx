import Link from "next/link";
import classes from "./guest_footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TopLeftLogo from "../shared/top_left_logo";

export default function GuestFooter() {
  return (
    <nav className={classes.footer}>
      <div className={classes.column}>
        <TopLeftLogo width={150} height={45} />
        <div className={classes.socialMedia}>
          <FacebookIcon fontSize="large" color="primary" />
          <TwitterIcon fontSize="large" color="primary" />
          <InstagramIcon fontSize="large" color="primary" />
          <LinkedInIcon fontSize="large" color="primary" />
        </div>
      </div>
      <div className={classes.column}>
        <Link href="/">
          <span className={classes.linkStyle}>Home</span>
        </Link>
        <Link href="/#About">
          <span className={classes.linkStyle}>About</span>
        </Link>

        <Link href="/#Pricing">
          <span className={classes.linkStyle}>Pricing</span>
        </Link>

        <Link href="/#FAQ">
          <span className={classes.linkStyle}>FAQ</span>
        </Link>
      </div>
      <div className={classes.column}>
        <Link href="/#FAQ">
          <span className={classes.linkStyle}> Terms and conditions</span>
        </Link>
        <Link href="/#FAQ">
          <span className={classes.linkStyle}> Careers</span>
        </Link>
        <Link href="/#FAQ">
          <span className={classes.linkStyle}> Privacy</span>
        </Link>
        <Link href="/#FAQ">
          <span className={classes.linkStyle}>Ads</span>
        </Link>
      </div>

      <div className={classes.column}>
        <Link href="/#FAQ">
          <span className={classes.linkStyle}> Jobs</span>
        </Link>
        <Link href="/#FAQ">
          <span className={classes.linkStyle}> Projects</span>
        </Link>
        <Link href="/#FAQ">
          <span className={classes.linkStyle}> Companies</span>
        </Link>
        <Link href="/#FAQ">
          <span className={classes.linkStyle}>People</span>
        </Link>
      </div>
    </nav>
  );
}
