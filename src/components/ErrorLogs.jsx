export default function ErrorLogs() {
  return (
    <section>
      <h2>🛠️ ERROR LOGS</h2>

      <div className="terminal">
        <p className="error">❌ [SETUP ERROR] Android development environment failed</p>
        <p>➜ CAUSE: Incorrect SDK paths and missing environment variables</p>
        <p className="fix">✔ FIX: Properly configured Android SDK, JDK, and environment variables</p>
        <p className="learn">📘 LEARNING: Correct environment setup is critical for mobile development</p>
      </div>

      <div className="terminal">
        <p className="error">❌ [BUILD ERROR] React Native Gradle build failure</p>
        <p>➜ CAUSE: Gradle version mismatch and dependency conflicts</p>
        <p className="fix">✔ FIX: Updated Gradle, synced dependencies, and rebuilt the project</p>
        <p className="learn">📘 LEARNING: Build tools compatibility directly affects app stability</p>
      </div>

      <div className="terminal">
        <p className="error">❌ [DATABASE ERROR] PHP–MySQL connection failed</p>
        <p>➜ CAUSE: MySQL port mismatch and incorrect configuration</p>
        <p className="fix">✔ FIX: Corrected port settings and updated database connection config</p>
        <p className="learn">📘 LEARNING: Database configuration must align with server environment</p>
      </div>

      <div className="terminal">
        <p className="error">❌ [API ERROR] Map API not loading data</p>
        <p>➜ CAUSE: Invalid API key and request restrictions</p>
        <p className="fix">✔ FIX: Regenerated API key and corrected request configuration</p>
        <p className="learn">📘 LEARNING: API authentication and quotas must be handled carefully</p>
      </div>
    </section>
  );
}
