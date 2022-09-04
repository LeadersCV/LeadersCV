import Image from "next/image";
import styles from "./single_product.module.css";
import { IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function SingleProduct(props: any) {
  const { title, imageUrl, description, areActionsIncluded } = props;

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
      {areActionsIncluded && (
        <div className={styles.actionsRow}>
          <IconButton aria-label="delete" size="medium" color="primary">
            <DeleteIcon fontSize="inherit" />
          </IconButton>

          <IconButton aria-label="delete" size="medium" color="primary">
            <EditIcon fontSize="inherit" />
          </IconButton>
        </div>
      )}
    </div>
  );
}
