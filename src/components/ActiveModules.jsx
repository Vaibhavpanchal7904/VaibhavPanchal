import { projects } from "../data/projects";

export default function ActiveModules() {
  return (
    <section>
      <h2 className="section-title">📦 Active Modules</h2>

      <div className="project-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            {/* IMAGE */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="project-features">
                {project.features?.map(f => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tech.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="project-footer">
              <a href={project.live} target="_blank">Live Demo</a>
              <a href={project.github} target="_blank">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
