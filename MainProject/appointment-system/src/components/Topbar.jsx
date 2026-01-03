import { useTheme } from "../context/ThemeContext";

export default function Topbar({ user, setAuth, setPage }) {
  const { theme, toggleTheme } = useTheme();

  function logout() {
    localStorage.clear();
    setAuth(false);
    setPage("landing");
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow px-4 sm:px-6 py-3
                       flex flex-wrap gap-4 justify-between items-center">
      <span className="font-medium">
        Welcome, {user?.name}
      </span>

      <div className="flex gap-3">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          onClick={logout}
          className="text-red-600 font-medium"
        >
          Logout

        </button>
      </div>
    </header>
  );
}