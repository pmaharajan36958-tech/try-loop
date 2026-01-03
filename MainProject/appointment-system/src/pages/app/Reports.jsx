export default function Reports({ appointments = [] }) {
  const total = appointments.length;
  const confirmed = appointments.filter(
    (a) => a.status === "Confirmed"
  ).length;
  const pending = total - confirmed;

  function download(type) {
    alert(`${type} report downloaded successfully (simulation).`);
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Generate and review appointment reports
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Appointments"
          value={total}
          color="blue"
        />
        <SummaryCard
          title="Confirmed"
          value={confirmed}
          color="green"
        />
        <SummaryCard
          title="Pending"
          value={pending}
          color="yellow"
        />
      </div>

      {/* REPORT TYPES */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Available Reports
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReportCard
            title="Daily Report"
            description="Appointments scheduled for today"
            onDownload={() => download("Daily")}
          />
          <ReportCard
            title="Monthly Report"
            description="Appointments summary for this month"
            onDownload={() => download("Monthly")}
          />
          <ReportCard
            title="Status Report"
            description="Confirmed vs Pending appointments"
            onDownload={() => download("Status")}
          />
        </div>
      </div>

      {/* RECENT APPOINTMENTS */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Recent Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No appointments available.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2">Title</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.slice(0, 5).map((a) => (
                  <tr
                    key={a.id}
                    className="border-b border-gray-100 dark:border-gray-700"
                  >
                    <td className="py-2">{a.title}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded-full text-xs
                          ${
                            a.status === "Confirmed"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

/* ===========================
   REUSABLE COMPONENTS
=========================== */

function SummaryCard({ title, value, color }) {
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

function ReportCard({ title, description, onDownload }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>

      <button
        onClick={onDownload}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded"
      >
        Download
      </button>
    </div>
  );
}