import Link from "next/link";
import Image from "next/image";

export default function TopLeftLogo() {
  return (
    <Link href="/">
      <Image
        src="/assets/Leaderscv_full_logo.png"
        width={150}
        height={37.5}
        priority
        style={{
          cursor: "pointer",
          paddingLeft: "10px",
        }}
      />
    </Link>
  );
}
