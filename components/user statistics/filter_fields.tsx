import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import styles from "./filter_fields.module.css";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";

export default function FilterFields() {
  const [currentRange, setCurrentRange] = useState([
    {
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function handleSelect(ranges: any) {
    const { selection } = ranges;
    console.log(ranges);
    setCurrentRange([selection]);
  }

  return (
    <section className={styles.filterSection}>
      <DateRangePicker ranges={currentRange} onChange={handleSelect} />
    </section>
  );
}
