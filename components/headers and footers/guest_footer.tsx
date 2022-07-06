import Link from "next/link";
import classes from "./guest_footer.module.css";

export default function GuestFooter() {
  return (
    <nav className={classes.footer}>
      <div className={classes.column}>
        <Link href="/">Home</Link>
        <Link href="/#About">About</Link>

        <Link href="/#Pricing">Pricing</Link>

        <Link href="/#FAQ">FAQ</Link>
      </div>
      <div></div>
      <div></div>
      <div></div>

      <Link href="/home">Home</Link>
      <Link href="/home">Home</Link>
    </nav>
  );
}
