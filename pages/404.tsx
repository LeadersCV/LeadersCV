import Head from "next/head";
import Link from "next/link";
import classes from "../styles/404/404.module.css";

export default function NotFoundPage() {
  return (
    <section className={classes.container}>
      <Head>
        <title>404 | Page Not found</title>
      </Head>
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
