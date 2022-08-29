import { Avatar, Fab } from "@mui/material";
import Head from "next/head";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import styles from "../../../styles/company profile/company_profile.module.css";
import EditIcon from "@mui/icons-material/Edit";
import userCover from "../../../public/assets/user_cover.png";
import Image from "next/image";
import DetailsSection from "../../../components/company profile/details_section";
import MissionSection from "../../../components/company profile/mission_section";
import VisionSection from "../../../components/company profile/vision_section";
import EmployeesSection from "../../../components/company profile/employees_section";
import CompanyProducts from "../../../components/company profile/company_products";
import CompanyClients from "../../../components/company profile/company_clients";
import CompanyActions from "../../../components/company profile/company_actions";

export default function CompanyProfile() {
  return (
    <section>
      <Head>
        <title>Mhams Profile</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.mainContainer}>
        <div className={styles.profile}>
          <section className={styles.coverAndProfileSection}>
            <Image
              src={"/" + userCover.src}
              alt="cover"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "25px 25px 0px 0px",
              }}
              priority
            />
            <Avatar className={styles.profilePicture} />

            <Fab
              size="medium"
              aria-label="edit"
              className={styles.editCoverButton}
            >
              <EditIcon color="primary" />
            </Fab>
          </section>
          <DetailsSection />
          <MissionSection />
          <VisionSection />
          <EmployeesSection />
          <CompanyProducts />
          <CompanyClients />
        </div>
        <div className={styles.suggestionsAndActions}>
          <CompanyActions />
        </div>
      </section>
    </section>
  );
}
