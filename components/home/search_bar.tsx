import { useEffect, useState } from "react";
import classes from "./search_bar.module.css";
import { useRouter } from "next/router";

function SearchBar(props: any) {
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
      pathname: "/search",
      query: { term: searchTerm },
    });
  };

  return (
    <div className={classes.container}>
      <input
        placeholder={"Search for anything..."}
        className={classes.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        spellCheck="false"
      />
      <button className={classes.searchButton} onClick={() => search()}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
