export default function Sidebar({ setActive, open, close }) {
  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <h3>NAVIGATION</h3>
        <ul>
          <li onClick={() => setActive("overview")}>Overview</li>
          <li onClick={() => setActive("status")}>System Status</li>
          <li onClick={() => setActive("modules")}>Projects</li>
          <li onClick={() => setActive("metrics")}>Metrics</li>
          <li onClick={() => setActive("experience")}>Experience</li>
          <li onClick={() => setActive("experiments")}>Experiments</li>
          <li onClick={() => setActive("logs")}>Error Logs</li>
          <li onClick={() => setActive("freelance")}>Freelance</li>
          <li onClick={() => setActive("contact")}>Contact</li>
        </ul>
      </aside>

      {/* backdrop */}
      {open && <div className="sidebar-backdrop" onClick={close} />}
    </>
  );
}
