import { useTheme } from "../../context/ThemeContext";

export default function Register({ setPage }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors
        ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-xl shadow
          ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Register</h2>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <input className="w-full p-2 mb-3 border rounded bg-transparent" placeholder="Name" />
        <input className="w-full p-2 mb-3 border rounded bg-transparent" placeholder="Email" />
        <input className="w-full p-2 mb-3 border rounded bg-transparent" placeholder="Password" />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Create Account
        </button>

        <p
          onClick={() => setPage("login")}
          className="mt-4 text-center text-sm text-blue-500 cursor-pointer"
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
}