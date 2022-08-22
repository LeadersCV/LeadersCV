import { Doughnut, Pie } from "react-chartjs-2";
import styles from "./company_types_applied.module.css";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const data = {
  datasets: [
    {
      data: [10, 30, 40],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
    },
  ],
  labels: ["Consulting", "Tech", "Industrial"],
};

const options = {
  cutoutPercentage: 50,
  responsive: true,
};

export default function CompanyTypesApplied() {
  return (
    <div className={styles.pieContainer}>
      <h3>Companies Applied Distribution</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
}
