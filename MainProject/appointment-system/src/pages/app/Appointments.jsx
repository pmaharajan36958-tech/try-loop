import AppointmentForm from "../../components/AppointmentForm";
import AppointmentList from "../../components/AppointmentList";

export default function Appointments({ appointments, setAppointments }) {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Appointments</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Create and manage appointments
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FORM */}
        <div className="lg:col-span-1">
          <AppointmentForm setAppointments={setAppointments} />
        </div>

        {/* LIST */}
        <div className="lg:col-span-2">
          <AppointmentList
            appointments={appointments}
            setAppointments={setAppointments}
          />
        </div>
      </div>
    </div>
  );
}