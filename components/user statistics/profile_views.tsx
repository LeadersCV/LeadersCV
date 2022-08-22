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
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Profile Visits",
    },
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Visits",
      data: [5, 7, 8, 55, 4, 96, 1000],
      borderColor: "#002463",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function ProfileViews() {
  return <Line data={data} options={options} style={{ width: "100%" }} />;
}
