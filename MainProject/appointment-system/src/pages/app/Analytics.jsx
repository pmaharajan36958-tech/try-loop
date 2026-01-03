export default function Analytics({ appointments = [] }) {
  const total = appointments.length;

  const confirmed = appointments.filter(
    (a) => a.status === "Confirmed"
  ).length;

  const pending = appointments.filter(
    (a) => a.status !== "Confirmed"
  ).length;

  const today = new Date().toISOString().split("T")[0];
  const todayCount = appointments.filter(
    (a) => a.date === today
  ).length;

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Appointment insights and statistics
        </p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Appointments"
          value={total}
          color="blue"
        />
        <StatCard
          title="Confirmed"
          value={confirmed}
          color="green"
        />
        <StatCard
          title="Pending"
          value={pending}
          color="yellow"
        />
        <StatCard
          title="Today"
          value={todayCount}
          color="purple"
        />
      </div>

      {/* STATUS BREAKDOWN */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Status Breakdown
        </h2>

        {total === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No data available yet.
          </p>
        ) : (
          <div className="space-y-3">
            <ProgressBar
              label="Confirmed"
              count={confirmed}
              total={total}
              color="green"
            />
            <ProgressBar
              label="Pending"
              count={pending}
              total={total}
              color="yellow"
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ===========================
   REUSABLE COMPONENTS
=========================== */

function StatCard({ title, value, color }) {
  const colors = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    yellow: "text-yellow-600 dark:text-yellow-400",
    purple: "text-purple-600 dark:text-purple-400",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>
      <p className={`text-3xl font-bold mt-2 ${colors[color]}`}>
        {value}
      </p>
    </div>
  );
}

function ProgressBar({ label, count, total, color }) {
  const percentage = Math.round((count / total) * 100);

  const colors = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${colors[color]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}