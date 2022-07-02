import classes from "../styles/login/login.module.css";
import CustomTextField from "../components/shared/custom_text_field";
import CustomButton from "../components/shared/custom_button";
import GuestHeader from "../components/headers and footers/guest_header";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "common"])),
  },
});

function LoginPage(props: any) {
  const { t } = useTranslation("");

  return (
    <div className={classes.container}>
      <GuestHeader />
      <section className={classes.section}>
        <h1 className={classes.headline}>{t("common:login")}</h1>
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
          <CustomButton text={t("common:login")} />
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
