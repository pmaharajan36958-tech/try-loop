export default function AppointmentCard({ appointment, setAppointments }) {
  function remove() {
    setAppointments((prev) =>
      prev.filter((a) => a.id !== appointment.id)
    );
  }

  function confirmAppointment() {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === appointment.id
          ? { ...a, status: "Confirmed" }
          : a
      )
    );
  }

  const statusColors =
    appointment.status === "Confirmed"
      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-blue-600">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">
            {appointment.title}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {appointment.date} • {appointment.time}
          </p>

          <span
            className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${statusColors}`}
          >
            {appointment.status}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {appointment.status !== "Confirmed" && (
            <button
              onClick={confirmAppointment}
              className="text-sm px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white"
            >
              Confirm
            </button>
          )}

          <button
            onClick={remove}
            className="text-sm px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}