import { Doughnut } from "react-chartjs-2";
import styles from "./job_types_applied.module.css";
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
  labels: ["Software Engineer", "Flutter Developer", "Python Developer"],
};

const options = {
  cutoutPercentage: 50,
  responsive: true,
};

export default function JobTypesApplied() {
  return (
    <div className={styles.doughnutContainer}>
      <h3>Jobs Applied Distribution</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
}
