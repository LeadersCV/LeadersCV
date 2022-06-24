import HomeNavBar from "../shared/home_navbar";
import LoginAndSignUpButtons from "../shared/login_signup_buttons";
import classes from "./headers_&_footers.module.css";
import TopLeftLogo from "../shared/top_left_logo";

export default function GuestHeader() {
  return (
    <div className={classes.GuestHeader}>
      <div style={{ paddingLeft: "10px" }}>
        <TopLeftLogo />
      </div>
      <HomeNavBar />
      <LoginAndSignUpButtons />
    </div>
  );
}
