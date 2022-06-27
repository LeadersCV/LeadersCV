import GuestHeader from "../../components/headers and footers/guest_header";
import CustomButton from "../../components/shared/custom_button";
import classes from "../../styles/signup/success.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function VerificationSuccessful() {
  return (
    <div>
      <div className={classes.container}>
        <GuestHeader />
        <section className={classes.section}>
          <h1 className={classes.headline}>Congratulations</h1>
          <CheckCircleOutlineIcon
            color="primary"
            fontSize="large"
            sx={{
              height: "200px",
              width: "200px",
            }}
          />
          <h2 className={classes.subHeadline}>Your number has been verified</h2>
          <CustomButton text="Continue" />
        </section>
      </div>
    </div>
  );
}
