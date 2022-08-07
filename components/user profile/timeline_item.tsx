export default function TimelineElement(props: any) {
  return (
    <div>
      <div>{props.job}</div>
      <div>{props.description}</div>
    </div>
  );
}
