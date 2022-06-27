import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PinField from "react-pin-field";
import GuestHeader from "../../components/headers and footers/guest_header";
import CustomButton from "../../components/shared/custom_button";
import classes from "../../styles/phone verification/phone_verification.module.css";

export default function PhoneVerification() {
  const router = useRouter();
  const [timer, setTimer] = useState(60);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!timer) {
      setIsDisabled(false);
      return;
    }
    const limitedInterval = setInterval(function () {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(limitedInterval);
  }, [timer]);

  const checkCode = () => {
    goToSuccessPage();
  };

  const resendCode = () => {
    setIsDisabled(true);
    setTimer(60);
  };

  const goToSuccessPage = () => {
    router.replace("/signup/success");
  };

  return (
    <div className={classes.container}>
      <GuestHeader />
      <section className={classes.section}>
        <h1 className={classes.headline}>Phone Verification</h1>
        <h2 className={classes.subHeadline}>
          Please type the 6-digit code that has been sent to your phone
        </h2>
        <div>
          <PinField
            style={{
              width: 60,
              height: 60,
              color: "#002463",
              fontSize: "25px",
              fontWeight: "bolder",
              borderRadius: "20%",
              border: "none",
              outline: "none",
              backgroundColor: "#EFEEEE",
              textAlign: "center",
              margin: 5,
            }}
            length={6}
            validate="0123456789"
          />
        </div>
        <p className={classes.wrongPhone}>wrong phone?</p>
        <CustomButton
          text="Confirm"
          margin="10px 0px"
          onClick={() => checkCode()}
        />
        <CustomButton
          isDisabled={isDisabled}
          text={isDisabled ? "Resend code (" + timer + "s)" : "Resend code"}
          onClick={() => resendCode()}
        />
      </section>
    </div>
  );
}
