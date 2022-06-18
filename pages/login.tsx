import classes from "../styles/login/login.module.css";
import CustomTextField from "../components/shared/custom_text_field";
import CustomButton from "../components/shared/custom_button";
import GuestHeader from "../components/headers and footers/guest_header";

function LoginPage() {
  return (
    <div className={classes.container}>
      <GuestHeader />
      <section className={classes.section}>
        <h1 className={classes.headline}>LOGIN</h1>
        <div className={classes.loginForm}>
          <CustomTextField
            type="email"
            fieldName="Email"
            placeholder="JohnDoe@example.com"
          />
          <CustomTextField
            type="password"
            fieldName="Password"
            placeholder="Password"
          />
          <p className={classes.createAccount}>create an account?</p>
          <CustomButton text="Log in" />
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
