import Stats from "../../components/Stats";

export default function Dashboard({ appointments = [] }) {
  return (
    <div className="space-y-8 p-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Overview of your appointment booking system
        </p>
      </div>

      {/* STATS */}
      <Stats appointments={appointments} />

      {/* SYSTEM STATUS */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          System Status
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          All services are running smoothly. No issues detected.
        </p>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <ActionCard title="Create Appointment" />
        <ActionCard title="View Calendar" />
        <ActionCard title="View Reports" />
      </div>
    </div>
  );
}

/* ======================
   SMALL REUSABLE CARD
====================== */
function ActionCard({ title }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6
                    hover:shadow-lg transition cursor-pointer">
      <p className="font-medium text-gray-800 dark:text-white">
        {title}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Click to open
      </p>
    </div>
  );
}