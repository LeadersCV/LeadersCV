import HomeNavBar from "../shared/home_navbar";
import LoginAndSignUpButtons from "../shared/login_signup_buttons";
import classes from "./headers_&_footers.module.css";
import Image from "next/image";
import Link from "next/link";

export default function GuestHeader() {
  return (
    <div className={classes.GuestHeader}>
      <div className={classes.GuestHeaderImage}>
        <Link href="/">
          <Image
            src="/assets/Leaderscv_full_logo.png"
            width={150}
            height={37.5}
            priority
            className={classes.clickable}
          />
        </Link>
      </div>
      <HomeNavBar />
      <LoginAndSignUpButtons />
    </div>
  );
}
