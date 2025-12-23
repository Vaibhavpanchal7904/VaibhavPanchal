import { useEffect, useState } from "react";
import { projects } from "../data/projects";

export default function ActiveModules() {
  const [likes, setLikes] = useState({});

  /* Load likes from localStorage */
  useEffect(() => {
    const storedLikes = {};
    projects.forEach(project => {
      const saved = localStorage.getItem(`project_like_${project.id}`);
      storedLikes[project.id] = saved ? parseInt(saved) : 0;
    });
    setLikes(storedLikes);
  }, []);

  /* Handle like */
  const handleLike = (id) => {
    setLikes(prev => {
      const updated = {
        ...prev,
        [id]: (prev[id] || 0) + 1
      };
      localStorage.setItem(`project_like_${id}`, updated[id]);
      return updated;
    });
  };

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
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                Source Code
              </a>

              {/* ❤️ LIKE SECTION */}
              <div className="like-row">
                <button
                  className="like-btn"
                  onClick={() => handleLike(project.id)}
                >
                  ❤️
                </button>
                <span className="like-count">
                  {likes[project.id] || 0}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
