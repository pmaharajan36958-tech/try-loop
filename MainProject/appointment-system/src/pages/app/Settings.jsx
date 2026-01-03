import { useTheme } from "../../context/ThemeContext";

export default function Settings({ setAuth, setPage }) {
  const { theme, toggleTheme } = useTheme();

  function resetApp() {
    if (confirm("This will clear all data. Continue?")) {
      localStorage.clear();
      location.reload();
    }
  }

  return (
    <div className="space-y-10 max-w-4xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your application preferences
        </p>
      </div>

      {/* APPEARANCE */}
      <Section title="Appearance">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Theme</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Switch between light and dark mode
            </p>
          </div>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </Section>

      {/* PROFILE */}
      <Section title="Profile Settings">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Full Name"
            className="p-2 rounded border bg-transparent
                       border-gray-300 dark:border-gray-600"
          />
          <input
            placeholder="Email Address"
            className="p-2 rounded border bg-transparent
                       border-gray-300 dark:border-gray-600"
          />
        </div>

        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </Section>

      {/* PREFERENCES */}
      <Section title="Preferences">
        <Toggle label="Enable notifications" />
        <Toggle label="Auto-confirm appointments" />
      </Section>

      {/* DANGER ZONE */}
      <Section title="Danger Zone">
        <button
          onClick={resetApp}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Reset Application
        </button>
      </Section>
    </div>
  );
}

/* ===========================
   REUSABLE COMPONENTS
=========================== */

function Section({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
}

function Toggle({ label }) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-sm">{label}</span>
      <input type="checkbox" className="toggle-checkbox hidden" />
      <span className="w-10 h-5 bg-gray-300 rounded-full relative">
        <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full" />
      </span>
    </label>
  );
}