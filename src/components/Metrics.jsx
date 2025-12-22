import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { metrics } from "../data/metrics";
import Counter from "./Counter";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

export default function Metrics() {
  return (
    <section>
      <h2 className="section-title">📈 Performance Metrics</h2>

      {/* KPI COUNTERS */}
      <div className="metrics-cards">
        {metrics.counters.map((item) => (
          <div className="metric-card" key={item.label}>
           <Counter value={item.value} />

            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="metrics-charts">
        <div className="chart-card">
          <h3>Project Growth</h3>
          <Line
            data={{
              labels: metrics.growthData.labels,
              datasets: [
                {
                  label: "Projects",
                  data: metrics.growthData.values,
                  borderColor: "#5eead4",
                  backgroundColor: "rgba(94,234,212,0.2)",
                  tension: 0.4,
                },
              ],
            }}
           options={{
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#020617",
      titleColor: "#e5e7eb",
      bodyColor: "#cbd5f5",
      borderColor: "#5eead4",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: { color: "rgba(255,255,255,0.05)" },
      ticks: { color: "#94a3b8" },
    },
    y: {
      grid: { color: "rgba(255,255,255,0.05)" },
      ticks: { color: "#94a3b8" },
    },
  },
}}

          />
        </div>

        <div className="chart-card">
          <h3>Technology Activity</h3>
          <Bar
            data={{
              labels: metrics.activityData.labels,
              datasets: [
                {
                  label: "Proficiency",
                  data: metrics.activityData.values,
                  backgroundColor: "#60a5fa",
                },
              ],
            }}
           options={{
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#020617",
      titleColor: "#e5e7eb",
      bodyColor: "#cbd5f5",
      borderColor: "#60a5fa",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#94a3b8" },
    },
    y: {
      grid: { color: "rgba(255,255,255,0.05)" },
      ticks: { color: "#94a3b8" },
    },
  },
}}

          />
        </div>
      </div>
    </section>
  );
}
