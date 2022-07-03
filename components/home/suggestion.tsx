import classes from "./suggestion.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

export default function Suggestion(props: any) {
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/search",
      query: { term: props.children },
    });
  };

  return (
    <div className={classes.container} onClick={() => search()}>
      <p>{props.children}</p>
      <ArrowForwardIcon className={classes.icon} fontSize="large" />
    </div>
  );
}
