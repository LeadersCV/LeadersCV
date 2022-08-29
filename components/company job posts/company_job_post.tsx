import styles from "./company_job_post.module.css";

export default function CompanyJobPost(props: any) {
  const { title, date, description } = props;

  return <div>{title}</div>;
}
