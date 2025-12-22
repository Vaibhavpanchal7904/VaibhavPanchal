import { useState, useEffect } from "react";

import emailjs from "emailjs-com";

export default function FreelanceStatus() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serviceType, setServiceType] = useState("");


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
      {/* ================= APP DEVELOPMENT ================= */}
      <section className="freelance-hero">
        <div className="freelance-container">

          <div className="freelance-image animate-right">
            <img src="/download.svg" alt="App Development" />
          </div>

          <div className="freelance-glass animate-left">
            <h3>App Development Services</h3>

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

      {/* ================= WEB APP DEVELOPMENT ================= */}
      <section className="freelance-hero">
        <div className="freelance-container reverse">

          <div className="freelance-glass">
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

          <div className="freelance-image">
            <img src="/web-dev.png" alt="Web App Development" />
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
