import type { NextPage } from "next";
import classes from "../styles/home/home.module.css";
import SearchBar from "../components/home/search_bar";
import Suggestions from "../components/home/suggestions";
import Statistics from "../components/home/statistics";
import Pricing from "../components/home/pricing";
import FAQ from "../components/home/faq";
import About from "../components/home/about";
import GuestHeader from "../components/headers and footers/guest_header";

const Home: NextPage = () => {
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
