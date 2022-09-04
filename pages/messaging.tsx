import Head from "next/head";
import UserOrCompanyHeader from "../components/headers and footers/user_or_company_header";

export default function MessagingPage() {
  return (
    <div>
      <Head>
        <title>Messaging</title>
      </Head>
      <UserOrCompanyHeader />
    </div>
  );
}
