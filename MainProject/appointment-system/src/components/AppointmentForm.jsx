import { useState } from "react";

export default function AppointmentForm({ setAppointments }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !date || !time) return;

    setAppointments((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        date,
        time,
        status: "Scheduled",
      },
    ]);

    setTitle("");
    setDate("");
    setTime("");
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        New Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Appointment title"
          className="w-full p-2 rounded border bg-transparent
                     border-gray-300 dark:border-gray-600"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 rounded border bg-transparent
                     border-gray-300 dark:border-gray-600"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 rounded border bg-transparent
                     border-gray-300 dark:border-gray-600"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700
                     text-white py-2 rounded-lg"
        >
          Add Appointment
        </button>
      </form>
    </div>
  );
}