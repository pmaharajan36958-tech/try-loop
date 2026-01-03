export default function CalendarView({ appointments }) {
  if (appointments.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-10 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          No appointments scheduled.
        </p>
      </div>
    );
  }

  const grouped = appointments.reduce((acc, appt) => {
    acc[appt.date] = acc[appt.date] || [];
    acc[appt.date].push(appt);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.keys(grouped)
        .sort()
        .map((date) => (
          <div
            key={date}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-6"
          >
            <h2 className="text-lg font-semibold mb-4">
              📅 {date}
            </h2>

            <div className="space-y-4">
              {grouped[date].map((appt) => (
                <div
                  key={appt.id}
                  className="flex justify-between items-center p-4 rounded-lg border
                             border-gray-200 dark:border-gray-700"
                >
                  <div>
                    <p className="font-medium">
                      {appt.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ⏰ {appt.time}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 text-xs rounded-full
                      ${
                        appt.status === "Confirmed"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                  >
                    {appt.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}