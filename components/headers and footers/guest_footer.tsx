import Link from "next/link";

export default function GuestFooter() {
  return (
    <nav>
      <div>
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
