import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./top_bar.module.css";
import styles from "./shared_styles.module.css";
import Image from "next/image";
import websiteLogo from "../../public/assets/small_logo.png";

export default function TopBar(props: any) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(router.query.term);

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
  });

  const search = () => {
    router.push({
      pathname: "/search",
      query: { term: searchTerm },
    });
  };

  return (
    <nav className={styles.bar}>
      <section className={styles.leftSide}>
        <div style={{ paddingLeft: "10px" }}>
          <Link href="/">
            <Image
              src={"/" + websiteLogo.src}
              width="25px"
              height="35px"
              alt="logo"
              priority
              style={{
                cursor: "pointer",
                paddingLeft: "10px",
              }}
            />
          </Link>
        </div>

        <input
          defaultValue={props.term}
          className={styles.textField}
          spellCheck="false"
          placeholder="Search for anything..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className={styles.searchButton} onClick={() => search()}>
          Search
        </button>
      </section>
      <section className={styles.rightSide}>
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
