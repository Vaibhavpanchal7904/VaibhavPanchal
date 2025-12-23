import { useState } from "react";

export default function Experiments() {
  const [activeTab, setActiveTab] = useState("completed");

  const experiments = [
    {
      title: "First React Native Application",
      status: "Completed",
      result:
        "Gained hands-on understanding of mobile app structure, navigation, and local storage",
      type: "mobile"
    },
    {
      title: "AI / ML Fundamentals Exploration",
      status: "Completed",
      result:
        "Built foundational understanding of machine learning concepts and real-world AI use cases",
      type: "ai"
    },
    {
      title: "AI-Assisted Resume & Career Analysis",
      status: "Ongoing",
      result:
        "Experimenting with NLP-based insights to improve recommendation accuracy",
      type: "ai"
    },
    {
      title: "Figma UI/UX Design Experiments",
      status: "Completed",
      result:
        "Improved layout consistency and visual hierarchy before frontend implementation",
      type: "ui"
    }
  ];

  const filteredExperiments = experiments.filter(exp =>
    activeTab === "completed"
      ? exp.status === "Completed"
      : exp.status === "Ongoing"
  );

  return (
    <section>
      <h2 className="section-title">🧪 Experiments Lab</h2>

      {/* ================= TABS ================= */}
      <div className="experience-tabs">
        <button
          className={`tab ${activeTab === "ongoing" ? "active" : ""}`}
          onClick={() => setActiveTab("ongoing")}
        >
          Ongoing
        </button>
        <button
          className={`tab ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid">
        {filteredExperiments.map(exp => (
          <div
            key={exp.title}
            className={`card experiment-card exp-${exp.type}`}
          >
            <div className="experiment-header">
              <h3>{exp.title}</h3>
              <span
                className={`experiment-status ${exp.status.toLowerCase()}`}
              >
                {exp.status}
              </span>
            </div>

            <p className="experiment-result">
              <strong>Result:</strong> {exp.result}
            </p>
          </div>
        ))}

        {/* Empty state */}
        {filteredExperiments.length === 0 && (
          <p className="empty-state">
            No experiments in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
