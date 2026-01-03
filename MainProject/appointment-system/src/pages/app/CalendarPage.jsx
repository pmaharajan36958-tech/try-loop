import CalendarView from "../../components/CalendarView";

export default function CalendarPage({ appointments }) {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-gray-500 dark:text-gray-400">
          View appointments grouped by date
        </p>
      </div>

      {/* CALENDAR */}
      <CalendarView appointments={appointments} />
    </div>
  );
}