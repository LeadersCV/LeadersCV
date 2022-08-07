import { Avatar } from "@mui/material";
import classes from "./job_post.module.css";

export default function JobPost(props: any) {
  const selectJobPost = () => {};

  return (
    <div
      className={`${classes.container}  ${
        props.selected ? classes.selectedJobPost : ""
      }`}
      onClick={() => selectJobPost()}
    >
      <div className={classes.header}>
        <div className={classes.avatarTitle}>
          <Avatar />
          <div className={classes.headline}>
            <span className={classes.title}>Software Engineer Needed</span>
            <span>
              <span className={classes.date}>2 days ago</span>
              <span className={classes.separator}> - </span>
              <span className={classes.applied}>25 Applied</span>
            </span>
          </div>
        </div>
      </div>
      <p className={classes.content}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search
        for lorem ipsum will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).
      </p>
    </div>
  );
}
