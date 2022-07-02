import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import classes from "../styles/404/404.module.css";

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "common"])),
  },
});

function NotFoundPage() {
  return (
    <section className={classes.container}>
      <p className={classes.title}>404</p>
      <div className={classes.subtitle}>Page not found</div>
      <hr className={classes.line} />
      <div className={classes.content}>
        Looks like you entered the wrong page. Return to{" "}
        <Link href={"/"}>
          <a className={classes.link}>HomePage</a>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
