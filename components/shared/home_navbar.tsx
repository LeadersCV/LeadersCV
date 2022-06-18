import classes from "./custom_navbar.module.css";
import Link from "next/link";

function HomeNavBar() {
  return (
    <nav className={classes.container}>
      <Link href="/">
        <a className={classes.navbarElements}>Home</a>
      </Link>
      <Link href="/#About">
        <a className={classes.navbarElements}> About us</a>
      </Link>
      <Link href="/create-your-cv">
        <a className={classes.createCV}>
          <p className={classes.cvText}> Create your CV </p>
        </a>
      </Link>
      <Link href="/#Pricing">
        <a className={classes.navbarElements}>Pricing</a>
      </Link>
      <Link href="/#FAQ">
        <a className={classes.navbarElements}>FAQ</a>
      </Link>
    </nav>
  );
}

export default HomeNavBar;
