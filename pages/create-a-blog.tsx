import Head from "next/head";
import { Fragment } from "react";
import UserOrCompanyHeader from "../components/headers and footers/user_or_company_header";
import styles from "../styles/create a blog/create_a_blog.module.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";

export default function CreateABlogPage() {
  return (
    <Fragment>
      <Head>
        <title>Create A Blog</title>
      </Head>
      <UserOrCompanyHeader isCompany />
      <section className={styles.createABlogSection}>
        <div className={styles.titleSection}>
          <span>Title</span>
          <input
            className={styles.inputField}
            placeholder="Write your title here"
          />
        </div>
        <div className={styles.contentSection}>
          <span>Content</span>
          <textarea
            className={styles.areaField}
            placeholder="Write your content here"
          />
        </div>

        <div className={styles.actionsRow}>
          <Button variant="contained" color="error" startIcon={<ClearIcon />}>
            Cancel
          </Button>
          <Button variant="contained" startIcon={<CheckIcon />}>
            Create
          </Button>
        </div>
      </section>
    </Fragment>
  );
}
