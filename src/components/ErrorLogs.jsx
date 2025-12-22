export default function ErrorLogs() {
  return (
    <section>
      <h2>🛠️ ERROR LOGS</h2>

      <div className="terminal">
        <p className="error">❌ [ERROR] IIS site not responding</p>
        <p>➜ CAUSE: Incorrect application pool configuration</p>
        <p className="fix">✔ FIX: Reconfigured app pool and restarted IIS services</p>
        <p className="learn">📘 LEARNING: Server configuration directly impacts uptime</p>
      </div>

      <div className="terminal">
        <p className="error">❌ [BUG] Website changes not reflecting</p>
        <p>➜ CAUSE: Cached files and improper deployment</p>
        <p className="fix">✔ FIX: Cleared cache and redeployed updated build</p>
        <p className="learn">📘 LEARNING: Deployment verification is essential</p>
      </div>

      <div className="terminal">
        <p className="error">❌ [ISSUE] Session lost after page refresh</p>
        <p>➜ CAUSE: Session configuration mismatch</p>
        <p className="fix">✔ FIX: Updated session handling strategy</p>
        <p className="learn">📘 LEARNING: Consistent session management improves stability</p>
      </div>
    </section>
  );
}
