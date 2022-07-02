import { useEffect, useState } from "react";
import classes from "./search_bar.module.css";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function SearchBar(props: any) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const enterSearch = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", enterSearch);

    return () => {
      document.removeEventListener("keydown", enterSearch);
    };
  }, [enterSearch]);

  const search = () => {
    router.push({
      pathname: "/" + i18n.language + "/search",
      query: { term: searchTerm },
    });
  };

  return (
    <div className={classes.container}>
      <input
        placeholder={t("common:search_anything")}
        className={classes.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        spellCheck="false"
      />
      <button className={classes.searchButton} onClick={() => search()}>
        {t("common:search")}
      </button>
    </div>
  );
}

export default SearchBar;
