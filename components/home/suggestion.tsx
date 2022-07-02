import classes from "./suggestion.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Suggestion(props: any) {
  const { i18n } = useTranslation();
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/" + i18n.language + "/search",
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
