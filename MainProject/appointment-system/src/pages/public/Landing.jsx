import { useTheme } from "../../context/ThemeContext";

export default function Landing({ setPage }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300
        ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
    >
      <div
        className={`p-10 rounded-xl shadow-xl text-center max-w-xl w-full
          ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Appointment Booking System</h1>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <p className="text-gray-500 dark:text-gray-300 mb-6">
          Book and manage appointments easily with a modern web application.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setPage("login")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Login
          </button>

          <button
            onClick={() => setPage("register")}
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}