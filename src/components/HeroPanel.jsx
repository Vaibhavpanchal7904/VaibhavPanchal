import { useState } from "react";

export default function HeroPanel() {
  const [mode, setMode] = useState("professional"); // "professional" | "personal"

  const isProfessional = mode === "professional";

  return (
    <section
      className={`about-hero ${
        isProfessional ? "pro-bg" : "personal-bg"
      }`}
    >
      <div className="about-container">

        {/* TOGGLE */}
        <div className="mode-toggle">
          <button
            className={isProfessional ? "active" : ""}
            onClick={() => setMode("professional")}
          >
            Professional
          </button>
          <button
            className={!isProfessional ? "active" : ""}
            onClick={() => setMode("personal")}
          >
            Personal
          </button>
        </div>

        {/* LEFT CONTENT */}
        <div className="about-content">
          <h1>
            A little bit <br />
            <span className="accent">about me</span>
          </h1>

          {isProfessional ? (
            <>
              <p className="about-intro pro-text">
                I’m an Information Technology undergraduate with hands-on
                experience in building and managing real-world web systems.
              </p>

              <p className="pro-text">
                My work focuses on full-stack web development, backend systems,
                dashboards, and server-side management with an emphasis on
                performance and reliability.
              </p>

              <p className="pro-text">
                I have managed live websites, handled IIS servers, and contributed
                through internships and institutional roles with a structured,
                production-first approach.
              </p>
            </>
          ) : (
            <>
              <p className="about-intro personal-text">
                Hi, I’m Vaibhav — an IT undergraduate who enjoys building things
                that actually work in real environments, not just demos.
              </p>

              <p className="personal-text">
                I like working on web systems, dashboards, and backend logic,
                especially understanding how applications behave once they go
                live.
              </p>

              <p className="personal-text">
                I learn best by experimenting, breaking things, fixing them, and
                improving systems step by step while managing real websites and
                servers.
              </p>
            </>
          )}

          {/* MINI INFO GRID */}
          <div className="about-meta">
            <div>
              <span className="meta-title">Experience</span>
              <span>Web Developer · CVM</span>
            </div>
            <div>
              <span className="meta-title">Stack</span>
              <span>React · Node · MongoDB · Java</span>
            </div>
            <div>
              <span className="meta-title">Focus</span>
              <span>Web Systems · Backend · Server Ops</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="about-images">
          <img src="/21.avif" alt="workspace" className="img img-1" />
          <img src="/22.avif" alt="code" className="img img-2" />
          <img src="/23.avif" alt="system" className="img img-3" />
        </div>

      </div>
    </section>
  );
}
