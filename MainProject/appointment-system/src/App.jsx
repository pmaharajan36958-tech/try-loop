import { useState, useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { useAppointments } from "./hooks/useAppointments";

/* Public Pages */
import Landing from "./pages/public/Landing";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import ForgotPassword from "./pages/public/ForgotPassword";

/* Layout */
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

/* App Pages */
import Dashboard from "./pages/app/Dashboard";
import Appointments from "./pages/app/Appointments";
import CalendarPage from "./pages/app/CalendarPage";
import Analytics from "./pages/app/Analytics";
import Reports from "./pages/app/Reports";
import Settings from "./pages/app/Settings";

/* System */
import NotFound from "./pages/system/NotFound";

const VALID_PAGES = [
  "dashboard",
  "appointments",
  "calendar",
  "analytics",
  "reports",
  "settings",
];

export default function App() {
  const { theme } = useTheme();
  const { appointments, setAppointments } = useAppointments();

  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [page, setPage] = useState(
    localStorage.getItem("page") || "landing"
  );

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("page", page);
  }, [auth, user, page]);

  /* ===== PUBLIC FLOW ===== */
  if (!auth) {
    if (page === "landing") return <Landing setPage={setPage} />;
    if (page === "login")
      return <Login setAuth={setAuth} setUser={setUser} setPage={setPage} />;
    if (page === "register") return <Register setPage={setPage} />;
    if (page === "forgot") return <ForgotPassword setPage={setPage} />;
    return <NotFound />;
  }

  if (!VALID_PAGES.includes(page)) {
    setPage("dashboard");
  }

  /* ===== PRIVATE APP ===== */
  return (
    <div
      className={`min-h-screen flex transition-colors
        ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
    >
      <Sidebar page={page} setPage={setPage} />

      <div className="flex-1 flex flex-col">
        <Topbar user={user} setAuth={setAuth} setPage={setPage} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {page === "dashboard" && <Dashboard appointments={appointments} />}
          {page === "appointments" && (
            <Appointments
              appointments={appointments}
              setAppointments={setAppointments}
            />
          )}
          {page === "calendar" && (
            <CalendarPage appointments={appointments} />
          )}
          {page === "analytics" && (
            <Analytics appointments={appointments} />
          )}
          {page === "reports" && (
            <Reports appointments={appointments} />
          )}
          {page === "settings" && <Settings />}
        </main>
      </div>
    </div>
  );
}