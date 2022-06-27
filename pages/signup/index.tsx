import { useRouter } from "next/router";
import GuestHeader from "../../components/headers and footers/guest_header";
import CountryCodePicker from "../../components/shared/country_code_picker";
import CountryPicker from "../../components/shared/country_picker";
import CustomButton from "../../components/shared/custom_button";
import CustomDropDown from "../../components/shared/custom_drop_down";
import CustomTextField from "../../components/shared/custom_text_field";
import classes from "../../styles/signup/signup.module.css";

function SignupPage() {
  const router = useRouter();

  const goToVerificationPage = () => {
    router.push("/signup/phone-verification");
  };

  return (
    <div className={classes.container}>
      <GuestHeader />
      <section className={classes.section}>
        <h1 className={classes.headline}>SIGN UP</h1>
        <div className={classes.signUpForm}>
          <div className={classes.formColumn}>
            <CustomTextField
              type="email"
              fieldName="Email*"
              placeholder="JohnDoe@example.com"
            />
            <CustomDropDown options={["Male", "Female"]} fieldName="Gender" />
            <CustomDropDown
              options={["Single", "Married"]}
              fieldName="Marital Status*"
            />
            <CountryCodePicker fieldName="Phone Number" />
            <CountryPicker fieldName="Nationality*" />
          </div>
          <div className={classes.formColumn}>
            <CustomTextField
              type="text"
              fieldName="First Name*"
              placeholder="First Name"
            />
            <CustomTextField
              type="text"
              fieldName="Middle Name"
              placeholder="Middle Name"
            />
            <CustomTextField
              type="text"
              fieldName="Last Name*"
              placeholder="Last Name"
            />
            <CustomTextField
              type="text"
              fieldName="Password*"
              placeholder="Password"
            />
            <CustomTextField
              type="text"
              fieldName="Confirm Password*"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <p className={classes.notice}>
          verification code will be sent to the phone number provided for
          verification, otherwise , email verification will be sent instead.
        </p>
        <CustomButton onClick={() => goToVerificationPage()} text="Confirm" />
      </section>
    </div>
  );
}

export default SignupPage;
