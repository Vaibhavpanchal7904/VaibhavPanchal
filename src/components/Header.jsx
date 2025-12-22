export default function Header({ toggleSidebar }) {
  return (
    <header className="header">
      {/* HAMBURGER (mobile only via CSS) */}
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      <h1>🖥️ VaibhavOS</h1>

      <span className="status online">SYSTEM ONLINE</span>
    </header>
  );
}
