import { useTheme } from "../../context/ThemeContext";

export default function ForgotPassword({ setPage }) {
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
          <h2 className="text-2xl font-bold">Reset Password</h2>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <input
          placeholder="Enter your email"
          className="w-full p-2 border rounded bg-transparent mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Send Reset Link
        </button>

        <p
          onClick={() => setPage("login")}
          className="mt-4 text-center text-sm text-blue-500 cursor-pointer"
        >
          Back to Login
        </p>
      </div>
    </div>
  );
}