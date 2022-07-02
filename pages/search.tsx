import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Filters from "../components/search/filters";
import Results from "../components/search/results";
import TopBar from "../components/search/top_bar";
import classes from "../styles/search/search.module.css";

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "common"])),
  },
});

export default function SearchPage() {
  const router = useRouter();

  return (
    <div>
      <TopBar term={router.query.term} />
      <section className={classes.contentSection}>
        <Filters />
        <Results isLoading={true} term={router.query.term} />
      </section>
    </div>
  );
}
