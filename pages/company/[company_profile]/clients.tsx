import { Fragment } from "react";
import UserOrCompanyHeader from "../../../components/headers and footers/user_or_company_header";

export default function CompanyClientsPage() {
  return (
    <Fragment>
      <UserOrCompanyHeader isCompany />
    </Fragment>
  );
}
