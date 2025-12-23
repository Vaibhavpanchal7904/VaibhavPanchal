export default function ContactTerminal() {
  return (
    <section>
      <h2 className="section-title">📞 Contact Terminal</h2>

      <div className="terminal">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">system@vaibhav-os</span>
        </div>

        <div className="terminal-body">
          <p className="cmd">
            &gt; system.connect --with <span>"Vaibhav"</span>
          </p>

          {/* SOCIAL CONNECT */}
          <div className="terminal-section">
            <h4>Get Connected On</h4>
            <div className="icon-row">
              <a href="https://github.com/Vaibhavpanchal7904" className="icon github">GitHub</a>
              <a href="http://www.linkedin.com/in/vaibhav-panchal-9b3882348" className="icon linkedin">LinkedIn</a>
              <a href="#" className="icon twitter">X</a>
              <a href="#" className="icon instagram">Instagram</a>
            </div>
          </div>

         

          {/* CONTACT INFO */}
          <div className="terminal-section">
            <h4>Direct Contact</h4>
            <p>📞 +91-9313704891</p>
            <p>✉️ vaibhavpanchal7904@email.com</p>
          </div>

          {/* STATUS */}
          <p className="status">
            STATUS: <span className="online">AVAILABLE FOR OPPORTUNITIES</span>
          </p>
        </div>
      </div>
    </section>
  );
}
