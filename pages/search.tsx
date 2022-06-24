import { useRouter } from "next/router";
import Filters from "../components/search/filters";
import Results from "../components/search/results";
import TopBar from "../components/search/top_bar";
import classes from "../styles/search/search.module.css";

export default function SearchPage() {
  const router = useRouter();

  return (
    <div>
      <TopBar term={router.query.term} />
      <section className={classes.contentSection}>
        <Filters />
        <Results />
      </section>
    </div>
  );
}
