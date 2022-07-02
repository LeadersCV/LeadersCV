import classes from "./home_navbar.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function HomeNavBar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className={classes.container}>
      <Link href="/" locale={i18n.language}>
        <a className={classes.navbarElements}>{t("navbar:home")}</a>
      </Link>
      <Link href="/#About" locale={i18n.language}>
        <a className={classes.navbarElements}>{t("navbar:about_us")}</a>
      </Link>
      <Link href="/create-your-cv" locale={i18n.language}>
        <a className={classes.createCV}>
          <p className={classes.cvText}>{t("navbar:create_your_cv")}</p>
        </a>
      </Link>
      <Link href="/#Pricing" locale={i18n.language}>
        <a className={classes.navbarElements}>{t("navbar:pricing")}</a>
      </Link>
      <Link href="/#FAQ" locale={i18n.language}>
        <a className={classes.navbarElements}>{t("navbar:faq")}</a>
      </Link>
    </nav>
  );
}

export default HomeNavBar;
