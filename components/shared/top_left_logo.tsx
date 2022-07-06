import Link from "next/link";
import Image from "next/image";

export default function TopLeftLogo() {
  return (
    <Link href="/">
      <Image
        src="/assets/Leaderscv_full_logo.png"
        width={500}
        height={125}
        priority
        style={{
          cursor: "pointer",
          paddingLeft: "10px",
        }}
      />
    </Link>
  );
}
