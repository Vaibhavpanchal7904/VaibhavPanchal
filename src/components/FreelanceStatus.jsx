import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function FreelanceStatus() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [activeTab, setActiveTab] = useState("completed");

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-left, .animate-right"
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_kd7su8u",
        "template_1bwvlw8",
        e.target,
        "y6OFh9mt1hrc9dJje"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
        }, 2500);
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send request");
      });
  };

  return (
    <>
      {/* ================= PAGE TITLE ================= */}
      <section className="section-header">
        <h2 className="section-title">💼 Professional Experience & Freelance Work</h2>
        <p className="section-subtitle">
          Real-world projects, hands-on development, and client-focused delivery
        </p>

        {/* ================= TABS ================= */}
        <div className="experience-tabs">
          <button
            className={`tab ${activeTab === "current" ? "active" : ""}`}
            onClick={() => setActiveTab("current")}
          >
            Current Projects
          </button>
          <button
            className={`tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed Projects
          </button>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="experience-section">

        {/* ===== CURRENT PROJECTS ===== */}
        {activeTab === "current" && (
          <div className="experience-grid">
            <div className="experience-card muted">
              <h3>🚧 Ongoing Development Work</h3>
              <p className="experience-desc">
                Currently working on web and mobile projects involving dashboards,
                backend systems, UI improvements, and performance optimization.
              </p>
              <p className="experience-learning">
                📘 <strong>Focus:</strong> Scalability, clean architecture, and
                production-ready deployment
              </p>
            </div>
          </div>
        )}

        {/* ===== COMPLETED PROJECTS ===== */}
{activeTab === "completed" && (
  <div className="experience-grid">

    <div className="experience-card highlight">

      {/* IMAGE */}
      <div className="experience-image">
        <img
          src="/p4.png"
          alt="Miraya Beauty Care Website"
        />

        <a
          href="https://mirayabeautycare.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="live-demo-btn"
        >
          🔗 Live Demo
        </a>
      </div>

      {/* CONTENT */}
      <div className="experience-body">
        <div className="experience-header">
          <h3>Miraya Beauty Care</h3>
          <span className="status-badge live">LIVE</span>
        </div>

        <p className="experience-meta">
          ⏱ 2 Months &nbsp; | &nbsp; 🌍 Freelance &nbsp; | &nbsp; 🧩 Real-world Client
        </p>

        <p className="experience-desc">
          Designed and developed a complete business website for a beauty care brand,
          focusing on brand presence, service showcasing, and dynamic content updates.
        </p>

        <ul className="experience-points">
          <li>Responsive UI using HTML, CSS, JavaScript, jQuery & Bootstrap</li>
          <li>Integrated Contentful CMS for easy content management</li>
          <li>API-driven dynamic content sections</li>
          <li>Handled full lifecycle: design → deployment</li>
        </ul>

        <p className="experience-learning">
          📘 <strong>Learning:</strong> Client communication, real deadlines,
          production deployment, long-term maintainability
        </p>
      </div>

    </div>
  </div>
)}
      </section>

      {/* ================= APP DEVELOPMENT ================= */}
      <section className="freelance-hero">
        <div className="freelance-container">

          <div className="freelance-image animate-right">
            <img src="/download.svg" alt="App Development" />
          </div>

          <div className="freelance-glass animate-left">
            <h3>Mobile App Development</h3>

            <ul>
              <li>📱 <strong>Custom Android Apps</strong> — Business & startup ready</li>
              <li>🎨 <strong>Jetpack Compose UI</strong> — Modern & smooth UX</li>
              <li>⚡ <strong>Performance Optimized</strong> — Fast & responsive</li>
              <li>🔧 <strong>Maintenance & Updates</strong> — Long-term support</li>
            </ul>

            <button
              className="cta-btn"
              onClick={() => {
                setServiceType("Mobile App Development");
                setOpen(true);
              }}
            >
              Book an Appointment
            </button>
          </div>

        </div>
      </section>

      {/* ================= WEB DEVELOPMENT ================= */}
      <section className="freelance-hero">
        <div className="freelance-container reverse">

          <div className="freelance-glass animate-right">
            <h3>Web Application Development</h3>

            <ul>
              <li>🌐 <strong>Modern Web Apps</strong> — React, MERN & scalable</li>
              <li>📊 <strong>Dashboards & Admin Panels</strong> — Data-driven UI</li>
              <li>🔐 <strong>Secure Backends</strong> — Auth, APIs & DB</li>
              <li>🚀 <strong>Production Ready</strong> — Optimized & deployable</li>
            </ul>

            <p className="freelance-status">
              🟢 <span>Available for Freelance & Projects</span>
            </p>

            <button
              className="cta-btn"
              onClick={() => {
                setServiceType("Web Application Development");
                setOpen(true);
              }}
            >
              Book an Appointment
            </button>
          </div>

          <div className="freelance-image animate-">
            <img src="/web.avif" alt="Web App Development" />
          </div>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📅 Book an Appointment</h3>
              <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
            </div>

            {success ? (
              <p className="success-msg">✅ Request sent successfully!</p>
            ) : (
              <form className="modal-form" onSubmit={sendEmail}>
                <input name="name" placeholder="Your Name" required />
                <input name="email" type="email" placeholder="Your Email" required />

                <select name="service" defaultValue={serviceType} required>
                  <option>{serviceType}</option>
                  <option>Dashboard / Analytics</option>
                  <option>Backend System</option>
                  <option>Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Describe your requirement..."
                  rows="4"
                />

                <button type="submit">
                  {loading ? "Sending..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
