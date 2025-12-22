import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section>
      <h2 className="section-title">👨‍💻 Experience</h2>

      <div className="timeline">
        {experience.map((item, index) => (
          <div
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={item.id}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <h3>{item.role}</h3>
              <span className="company">{item.company}</span>

              <div className="meta">
                <span>{item.duration}</span>
                <span>{item.location}</span>
              </div>

              <p className="desc">{item.description}</p>

              <ul>
                {item.points.map(p => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>

              <div className="timeline-tags">
                {item.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
