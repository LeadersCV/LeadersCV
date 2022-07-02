import { useTranslation } from "next-i18next";
import classes from "./about.module.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="About" className={classes.container}>
      <h1 className={classes.header}>{t("navbar:about_us")}</h1>
    </div>
  );
}
