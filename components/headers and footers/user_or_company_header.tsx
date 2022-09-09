import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TopLeftLogo from "../shared/top_left_logo";
import classes from "./user_or_company_header.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import styles from "./shared_styles.module.css";
import WorkIcon from "@mui/icons-material/Work";
import { Badge, Button, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import Image from "next/image";
import websiteLogo from "../../public/assets/small_logo.png";

export default function UserOrCompanyHeader(props: any) {
  const { isCompany } = props;
  const router = useRouter();
  const path: string[] = router.asPath.split("/");
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
        <div
          style={{
            paddingLeft: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
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
      <section>
        <div className={classes.allRightButtons}>
          <Button variant="text" className={classes.rightButton}>
            <HomeIcon className={classes.buttonIcons} />
            <span>Home</span>
          </Button>
          {isCompany ? (
            <Link href={"/company/" + path[2] + "/employees"}>
              <Button variant="text" className={classes.rightButton}>
                <GroupIcon className={classes.buttonIcons} />
                <span>Employees</span>
              </Button>
            </Link>
          ) : (
            <Button variant="text" className={classes.rightButton}>
              <ApartmentIcon className={classes.buttonIcons} />
              <span>Companies</span>
            </Button>
          )}
          {isCompany ? (
            <Link href={"/company/" + path[2] + "/job-posts"}>
              <Button variant="text" className={classes.rightButton}>
                <WorkIcon className={classes.buttonIcons} />
                <span>Job Posts</span>
              </Button>
            </Link>
          ) : (
            <Button variant="text" className={classes.rightButton}>
              <GroupIcon className={classes.buttonIcons} />
              <span>Projects</span>
            </Button>
          )}

          <Link
            href={
              path[1] == "user" ? "/user/" + path[2] : "/company/" + path[2]
            }
          >
            <Button variant="text" className={classes.rightButton}>
              {isCompany ? (
                <ApartmentIcon className={classes.buttonIcons} />
              ) : (
                <PersonIcon className={classes.buttonIcons} />
              )}

              <span>Profile</span>
            </Button>
          </Link>
          <Button
            variant="text"
            className={classes.rightButton}
            onClick={() => {
              const path: string[] = router.asPath.split("/");

              router.push({
                pathname: "/user/" + path[2] + "/statistics",
              });
            }}
          >
            <ShowChartIcon className={classes.buttonIcons} />
            <span>Statistics</span>
          </Button>
          <Button
            variant="text"
            className={classes.rightButton}
            onClick={() => {
              const path: string[] = router.asPath.split("/");
              router.push({
                pathname: "/user/" + path[2] + "/settings",
              });
            }}
          >
            <SettingsIcon className={classes.buttonIcons} />
            <span>Settings</span>
          </Button>
          <Link href="/messaging">
            <IconButton color="primary" aria-label="add to shopping cart">
              <Badge badgeContent={2} color="primary">
                <ChatBubbleIcon style={{ fontSize: "25px" }} />
              </Badge>
            </IconButton>
          </Link>
          <Link href="/notifications">
            <IconButton color="primary" aria-label="add to shopping cart">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon style={{ fontSize: "25px" }} />
              </Badge>
            </IconButton>
          </Link>
          <IconButton color="primary" aria-label="add to shopping cart">
            <LogoutIcon style={{ fontSize: "25px" }} />
          </IconButton>
        </div>
      </section>
    </nav>
  );
}
