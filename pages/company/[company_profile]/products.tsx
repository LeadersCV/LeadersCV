import Head from "next/head";
import { Fragment, useState } from "react";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";
import styles from "../../../styles/company profile/company_products.module.css";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import SingleProduct from "../../../components/company profile/single_product";
import userCover from "../../../public/assets/user_cover.png";

enum periodFilters {
  all = "All",
  last24Hours = "Last 24 hours",
  last7Days = "Last 7 days",
  lastMonth = "Last Month",
  last6Months = "Last 6 Months",
}

export default function CompanyProductsPage() {
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
        <title>Company Products</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.productsContainer}>
        <input placeholder="Search" className={styles.searchField} />
        <div className={styles.filters}>
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
        </div>
        <div className={styles.listOfProducts}>
          <SingleProduct
            areActionsIncluded
            imageUrl={userCover}
            title="food"
            description="sdsd swewe wcscsds ewqewe cxcxs dewe sdsdsd qweew zdsads wewew dsd sewewe csdsds weq"
          />
          <SingleProduct
            areActionsIncluded
            imageUrl={userCover}
            title="food"
            description="sdsd swewe wcscsds ewqewe cxcxs dewe sdsdsd qweew zdsads wewew dsd sewewe csdsds weq sdsd swewe wcscsds ewqewe cxcxs dewe sdsdsd qweew zdsads wewew dsd sewewe csdsds weq"
          />
          <SingleProduct
            areActionsIncluded
            imageUrl={userCover}
            title="food"
            description="asasa"
          />
          <SingleProduct
            areActionsIncluded
            imageUrl={userCover}
            title="food"
            description="asasa"
          />
          <SingleProduct
            areActionsIncluded
            imageUrl={userCover}
            title="food"
            description="asasa"
          />
        </div>
      </section>
    </Fragment>
  );
}
