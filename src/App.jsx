import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import HeroPanel from "./components/HeroPanel";
import SystemStatus from "./components/SystemStatus";
import ActiveModules from "./components/ActiveModules";
import ErrorLogs from "./components/ErrorLogs";
import Metrics from "./components/Metrics";
import Experiments from "./components/Experiments";
import Experience from "./components/Experience";
import FreelanceStatus from "./components/FreelanceStatus";
import ContactTerminal from "./components/ContactTerminal";

export default function App() {
  const [active, setActive] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="dashboard">
        <Sidebar
          setActive={(key) => {
            setActive(key);
            setSidebarOpen(false); // close after click on mobile
          }}
          open={sidebarOpen}
          close={() => setSidebarOpen(false)}
        />

        <main className="panel">
          {active === "overview" && <HeroPanel />}
          {active === "status" && <SystemStatus />}
          {active === "modules" && <ActiveModules />}
          {active === "metrics" && <Metrics />}
          {active === "experience" && <Experience />}
          {active === "experiments" && <Experiments />}
          {active === "logs" && <ErrorLogs />}
          {active === "freelance" && <FreelanceStatus />}
          {active === "contact" && <ContactTerminal />}
        </main>
      </div>
    </div>
  );
}
