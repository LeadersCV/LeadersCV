import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./profile_views.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
};

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Visits",
      data: [5, 7, 8, 55, 4, 96, 100, 60, 53, 73, 89, 34],
      borderColor: "#002463",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function ProfileViews(props: any) {
  const { header } = props;

  return (
    <section>
      <div className={styles.lineContainer}>
        <h1>{header}</h1>
        <Line data={data} options={options} />
      </div>
    </section>
  );
}
