import styles from "./company_clients.module.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Fab } from "@mui/material";
import sharedStyles from "../user profile/shared_style.module.css";
import KFCImage from "../../public/assets/kfc.png";
import KuduImage from "../../public/assets/kudu.png";
import HerfyImage from "../../public/assets/herfy.png";
import SingleClient from "./single_client";

export default function CompanyClients(props: any) {
  const { isDifferentCompany } = props;

  return (
    <section className={styles.clientSection}>
      <div className={sharedStyles.titleAndActions}>
        <div className={sharedStyles.title}>Our Clients</div>
        {isDifferentCompany ? null : (
          <span className={sharedStyles.actions}>
            <Fab size="small" aria-label="edit" color="primary">
              <AddIcon sx={{ color: "white" }} />
            </Fab>
            <Fab size="small" aria-label="edit" color="primary">
              <EditIcon sx={{ color: "white" }} />
            </Fab>
          </span>
        )}
      </div>
      <div className={styles.clientsGrid}>
        <SingleClient imageUrl={KFCImage} title="KFC" />
        <SingleClient imageUrl={KuduImage} title="Judu" />
        <SingleClient imageUrl={HerfyImage} title="Herfy" />
        <SingleClient imageUrl={KFCImage} title="KFC" />
        <SingleClient imageUrl={KFCImage} title="KFC" />
      </div>
    </section>
  );
}
