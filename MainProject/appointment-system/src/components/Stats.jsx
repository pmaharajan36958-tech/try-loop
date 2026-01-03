export default function Stats({ appointments }) {
  const total = appointments.length;
  const confirmed = appointments.filter(
    (a) => a.status === "Confirmed"
  ).length;
  const pending = total - confirmed;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
    </div>
  );
}

function StatCard({ title, value, color }) {
  const colors = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    yellow: "text-yellow-600 dark:text-yellow-400",
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