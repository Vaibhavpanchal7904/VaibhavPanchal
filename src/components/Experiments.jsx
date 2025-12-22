export default function Experiments() {
 const experiments = [
    {
      title: "IIS Website Deployment & Hosting",
      status: "Completed",
      result: "Improved website uptime and deployment reliability",
      type: "server"
    },
    {
      title: "Content Management Workflow Optimization",
      status: "Completed",
      result: "Faster content updates and reduced manual effort",
      type: "system"
    },
    {
      title: "React Dashboard UI Experiments",
      status: "Ongoing",
      result: "Component-based layouts improve maintainability",
      type: "ui"
    },
    {
      title: "Multi-Site Structure Planning",
      status: "Archived",
      result: "Proper structure is essential before scaling websites",
      type: "architecture"
    }
  ];

  return (
    <section>
      <h2 className="section-title">🧪 Experiments Lab</h2>

      <div className="grid">
        {experiments.map(exp => (
          <div
            key={exp.title}
            className={`card experiment-card exp-${exp.type}`}
          >
            <div className="experiment-header">
              <h3>{exp.title}</h3>
              <span className={`experiment-status ${exp.status.toLowerCase()}`}>
                {exp.status}
              </span>
            </div>

            <p className="experiment-result">
              <strong>Result:</strong> {exp.result}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
