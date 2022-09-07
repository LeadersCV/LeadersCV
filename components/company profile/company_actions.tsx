import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import QuizIcon from "@mui/icons-material/Quiz";
import styles from "./company_actions.module.css";
import CategoryIcon from "@mui/icons-material/Category";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CompanyActions() {
  const router = useRouter();
  const path: string[] = router.asPath.split("/");

  return (
    <div className={styles.actionsContainer}>
      <Link href={"/company/" + path[2] + "/employees"}>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "rgb(239, 239, 239)",
            color: "#002463",
            fontWeight: "bold",
          }}
        >
          <ListItemButton color="primary">
            <ListItemIcon color="primary" sx={{ color: "#002463" }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText disableTypography>Employees</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href={"/company/" + path[2] + "/interviews"}>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "rgb(239, 239, 239)",
            color: "#002463",
            fontWeight: "bold",
          }}
        >
          <ListItemButton color="primary">
            <ListItemIcon color="primary" sx={{ color: "#002463" }}>
              <Diversity3Icon />
            </ListItemIcon>
            <ListItemText disableTypography>Interviews</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href={"/company/" + path[2] + "/quizzes"}>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "rgb(239, 239, 239)",
            color: "#002463",
            fontWeight: "bold",
          }}
        >
          <ListItemButton color="primary">
            <ListItemIcon color="primary" sx={{ color: "#002463" }}>
              <QuizIcon />
            </ListItemIcon>
            <ListItemText disableTypography>Quizzes</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href={"/company/" + path[2] + "/job-posts"}>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "rgb(239, 239, 239)",
            color: "#002463",
            fontWeight: "bold",
          }}
        >
          <ListItemButton color="primary">
            <ListItemIcon color="primary" sx={{ color: "#002463" }}>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText disableTypography>Job Posts</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href={"/company/" + path[2] + "/clients"}>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "rgb(239, 239, 239)",
            color: "#002463",
            fontWeight: "bold",
          }}
        >
          <ListItemButton color="primary">
            <ListItemIcon color="primary" sx={{ color: "#002463" }}>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText disableTypography>Clients</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href={"/company/" + path[2] + "/products"}>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "rgb(239, 239, 239)",
            color: "#002463",
            fontWeight: "bold",
          }}
        >
          <ListItemButton color="primary">
            <ListItemIcon color="primary" sx={{ color: "#002463" }}>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText disableTypography>Products</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href={"/company/" + path[2] + "/blogs"}>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "rgb(239, 239, 239)",
            color: "#002463",
            fontWeight: "bold",
          }}
        >
          <ListItemButton color="primary">
            <ListItemIcon color="primary" sx={{ color: "#002463" }}>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText disableTypography>Blogs</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href={"/messaging"}>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "rgb(239, 239, 239)",
            color: "#002463",
            fontWeight: "bold",
          }}
        >
          <ListItemButton color="primary">
            <ListItemIcon color="primary" sx={{ color: "#002463" }}>
              <ChatBubbleIcon />
            </ListItemIcon>
            <ListItemText disableTypography>Messaging</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
    </div>
  );
}
