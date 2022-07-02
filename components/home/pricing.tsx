import { useTranslation } from "next-i18next";
import classes from "./pricing.module.css";

export default function Pricing() {
  const { t } = useTranslation();
  return (
    <div id="Pricing" className={classes.container}>
      <h1 className={classes.header}>{t("navbar:pricing")}</h1>
    </div>
  );
}
