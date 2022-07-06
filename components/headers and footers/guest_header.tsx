import LoginAndSignUpButtons from "../shared/login_signup_buttons";
import classes from "./headers_&_footers.module.css";

export default function GuestHeader() {
  return (
    <div className={classes.GuestHeader}>
      <LoginAndSignUpButtons />
    </div>
  );
}
