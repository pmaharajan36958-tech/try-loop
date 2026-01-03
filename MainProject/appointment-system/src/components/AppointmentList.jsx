import AppointmentCard from "./AppointmentCard";

export default function AppointmentList({ appointments, setAppointments }) {
  if (appointments.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-10 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          No appointments yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {appointments.map((appt) => (
        <AppointmentCard
          key={appt.id}
          appointment={appt}
          setAppointments={setAppointments}
        />
      ))}
    </div>
  );
}