import type { GetStaticProps, NextPage } from "next";
import classes from "../components/home/home.module.css";
import SearchBar from "../components/home/search_bar";
import Suggestions from "../components/home/suggestions";
import Statistics from "../components/home/statistics";
import Pricing from "../components/home/pricing";
import FAQ from "../components/home/faq";
import About from "../components/home/about";
import GuestHeader from "../components/headers and footers/guest_header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "common"])),
  },
});

const Home: NextPage = (props: any) => {
  const { i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (i18n.language == "en") {
      router.replace("/en");
    } else if (i18n.language == "ar") {
      router.replace("/ar");
    }
  }, []);

  return (
    <div className={classes.container}>
      <GuestHeader />
      <SearchBar />
      <Suggestions />
      <Statistics />
      <Pricing />
      <FAQ />
      <About />
    </div>
  );
};

export default Home;
