import type { GetStaticProps, NextPage } from "next";
import classes from "../components/home/home.module.css";
import SearchBar from "../components/home/search_bar";
import Suggestions from "../components/home/suggestions";
import Statistics from "../components/home/statistics";
import Pricing from "../components/home/pricing";
import FAQ from "../components/home/faq";
import About from "../components/home/about";
import GuestHeader from "../components/headers and footers/guest_header";
import GuestFooter from "../components/headers and footers/guest_footer";

const Home: NextPage = (props: any) => {
  return (
    <div className={classes.container}>
      <GuestHeader />
      <SearchBar />
      <Suggestions />
      <Statistics />
      <Pricing />
      <FAQ />
      <About />
      <GuestFooter />
    </div>
  );
};

export default Home;
