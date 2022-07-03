import classes from "./middle_container.module.css";

export default function MiddleContainer(props: any) {
  return (
    <section
      className={classes.section}
      style={{
        padding: props.padding,
        margin: props.margin ?? "100px 0px",
      }}
    >
      {props.children}
    </section>
  );
}
