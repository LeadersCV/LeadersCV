import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TopLeftLogo from "../shared/top_left_logo";
import classes from "./top_bar.module.css";

export default function TopBar(props: any) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(props.term);

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
    <nav className={classes.bar}>
      <section className={classes.leftSide}>
        <div style={{ paddingLeft: "10px" }}>
          <TopLeftLogo width="175px" height="45px" />
        </div>

        <input
          defaultValue={props.term}
          className={classes.textField}
          spellCheck="false"
          placeholder="Search for anything..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className={classes.searchButton} onClick={() => search()}>
          Search
        </button>
      </section>
      <section className={classes.rightSide}>
        <Link href="/login">
          <a className={classes.rightButtons}>Login</a>
        </Link>
        <Link href="/signup">
          <a className={classes.rightButtons}>Sign up</a>
        </Link>
      </section>
    </nav>
  );
}
