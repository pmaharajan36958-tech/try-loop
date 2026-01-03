import { useState } from "react";

export default function Sidebar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const items = [
    ["Dashboard", "dashboard"],
    ["Appointments", "appointments"],
    ["Calendar", "calendar"],
    ["Analytics", "analytics"],
    ["Reports", "reports"],
    ["Settings", "settings"],
  ];

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white px-3 py-2 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-64
          bg-white dark:bg-gray-800 p-6 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-2xl font-bold mb-6">Menu</h2>

        <ul className="space-y-2">
          {items.map(([label, key]) => (
            <li
              key={key}
              onClick={() => {
                setPage(key);
                setOpen(false);
              }}
              className={`px-4 py-2 rounded cursor-pointer transition
                ${
                  page === key
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}