import Image from "next/image";
import styles from "./single_client.module.css";

export default function SingleClient(props: any) {
  const { title, imageUrl } = props;

  return (
    <div className={styles.container}>
      <Image
        src={"/" + imageUrl.src}
        alt="image"
        height="100%"
        width="100%"
        objectFit="cover"
      />
      <span className={styles.title}>{title}</span>
    </div>
  );
}
