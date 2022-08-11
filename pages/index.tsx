import type { GetStaticProps, NextPage } from "next";
import classes from "../components/home/home.module.css";
import SearchBar from "../components/home/search_bar";
import Suggestions from "../components/home/suggestions";
import Statistics from "../components/home/statistics";
import Pricing from "../components/home/pricing";
import FAQ from "../components/home/faq";
import About from "../components/home/about";
import GuestHeader from "../components/headers and footers/guest_header";
import TopLeftLogo from "../components/shared/top_left_logo";
import Head from "next/head";

const Home: NextPage = (props: any) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Leaders CV</title>
      </Head>
      <GuestHeader />
      <TopLeftLogo width={500} height={125} />
      <SearchBar />
      <Suggestions />
      <Statistics />
      <FAQ />
      <About />
      <Pricing />
    </div>
  );
};

export default Home;
