import Head from "next/head";
import { Fragment, useState } from "react";
import styles from "../../../styles/company profile/company_clients.module.css";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import KFCImage from "../../../public/assets/kfc.png";
import KuduImage from "../../../public/assets/kudu.png";
import HerfyImage from "../../../public/assets/herfy.png";
import SingleClient from "../../../components/company profile/single_client";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

enum periodFilters {
  all = "All",
  last24Hours = "Last 24 hours",
  last7Days = "Last 7 days",
  lastMonth = "Last Month",
  last6Months = "Last 6 Months",
}

export default function CompanyClientsPage() {
  const [period, setPeriod] = useState(periodFilters.all);

  const handlePeriodChange = (
    event: React.MouseEvent<HTMLElement>,
    newPeriod: periodFilters | null
  ) => {
    if (newPeriod !== null) setPeriod(newPeriod);
  };

  return (
    <Fragment>
      <Head>
        <title>Company Clients</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.clientsContainer}>
        <div className={styles.searchAndAddRow}>
          <input placeholder="Search" className={styles.searchField} />
          <Button variant="contained" endIcon={<AddIcon />}>
            Add A Client
          </Button>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterColumn}>
            <span>Period</span>
            <ToggleButtonGroup
              color="primary"
              value={period}
              exclusive
              onChange={handlePeriodChange}
              aria-label="Platform"
            >
              {Object.values(periodFilters).map((status, index) => (
                <ToggleButton
                  key={index}
                  size="small"
                  value={status}
                  className={styles.toggleButtonStyle}
                >
                  {status}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </div>
        <div className={styles.listOfClients}>
          <SingleClient imageUrl={KFCImage} title="KFC" areActionsIncluded />
          <SingleClient imageUrl={KuduImage} title="Kudu" areActionsIncluded />
          <SingleClient
            imageUrl={HerfyImage}
            title="Herfy"
            areActionsIncluded
          />
          <SingleClient imageUrl={KFCImage} title="KFC" areActionsIncluded />
          <SingleClient imageUrl={KuduImage} title="Kudu" areActionsIncluded />
          <SingleClient
            imageUrl={HerfyImage}
            title="Herfy"
            areActionsIncluded
          />
        </div>
      </section>
    </Fragment>
  );
}
