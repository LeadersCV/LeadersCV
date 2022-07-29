import Link from "next/link";
import Image from "next/image";
import websiteLogo from "../../public/assets/Leaderscv_full_logo.png";

export default function TopLeftLogo(props: any) {
  return (
    <Link href="/">
      <Image
        src={"/" + websiteLogo.src}
        width={props.width}
        height={props.height}
        alt="logo"
        priority
        style={{
          cursor: "pointer",
          paddingLeft: "10px",
        }}
      />
    </Link>
  );
}
