import Image from "next/image";
import styles from "./single_product.module.css";

export default function SingleProduct(props: any) {
  const { title, imageUrl, description } = props;

  return (
    <div className={styles.container}>
      <Image
        src={"/" + imageUrl.src}
        alt="image"
        height="100%"
        width="100%"
        objectFit="cover"
        style={{ borderRadius: "10px 10px 0px 0px" }}
      />
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
}
