import { useTheme } from "../../context/ThemeContext";

export default function Login({ setAuth, setUser, setPage }) {
  const { theme, toggleTheme } = useTheme();

  function handleLogin(e) {
    e.preventDefault();

    setUser({
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
    });

    setAuth(true);
    setPage("dashboard");
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300
        ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-xl shadow-lg
          ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Login</h2>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            placeholder="Email"
            className="w-full p-2 rounded border bg-transparent
                       border-gray-300 dark:border-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded border bg-transparent
                       border-gray-300 dark:border-gray-600"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>
        </form>

        <p
          onClick={() => setPage("forgot")}
          className="mt-4 text-center text-sm text-blue-500 cursor-pointer"
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
}