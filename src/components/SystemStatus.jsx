import { useEffect, useRef, useState } from "react";
import { skills } from "../data/skills";

export default function SystemStatus() {
  return (
    <section>
      <h2 className="section-title">⚙️ Technical Skill Status</h2>

      <div className="grid">
        {skills.map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------
   INDIVIDUAL SKILL CARD
-------------------------------- */
function SkillCard({ skill }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  /* Reveal animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* Counter animation */
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start >= skill.level) {
        start = skill.level;
        clearInterval(interval);
      }
      setCount(start);
    }, 12);

    return () => clearInterval(interval);
  }, [visible, skill.level]);

  return (
    <div
      ref={ref}
      className={`card skill-card ${visible ? "active" : ""}`}
      title={skill.description || "Technical proficiency level"}
    >
      <div className="skill-header">
        <span>{skill.name}</span>

        <span
          className={`badge ${skill.state
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {skill.state}
        </span>
      </div>

      <div className="meter">
        <div
          className="meter-fill"
          style={{ width: visible ? `${skill.level}%` : "0%" }}
        />
      </div>

      <div className="skill-meta">
        <span className="load-label">Proficiency  </span>
        <span className="load-value">{skill.level}%</span>
      </div>
    </div>
  );
}
