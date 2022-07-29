import { useRouter } from "next/router";
import Filters from "../components/search/filters";
import Results from "../components/search/results";
import SelectedJobPost from "../components/search/selected_job_post";
import TopBar from "../components/search/top_bar";
import classes from "../styles/search/search.module.css";

export default function SearchPage() {
  const router = useRouter();

  return (
    <div>
      <TopBar term={router.query.term} />
      <section className={classes.contentSection}>
        <Filters />
        <Results isLoading={true} />
        <SelectedJobPost hasApplied />
      </section>
    </div>
  );
}
