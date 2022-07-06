import Link from "next/link";
import Image from "next/image";

export default function TopLeftLogo(props : any) {
  return (
    <Link href="/">
      <Image
        src="/assets/Leaderscv_full_logo.png"
        width={props.width}
        height={props.height}
        priority
        style={{
          cursor: "pointer",
          paddingLeft: "10px",
        }}
      />
    </Link>
  );
}
