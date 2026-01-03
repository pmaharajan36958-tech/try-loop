import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointments, setAppointments] = useState([]);

  const bookAppointment = () => {
    if (!name || !date || !time) {
      alert("Fill all fields");
      return;
    }

    setAppointments([
      ...appointments,
      { id: Date.now(), name, date, time }
    ]);

    setName("");
    setDate("");
    setTime("");
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
  };

  return (
    <div className="container">
      <h1>Appointment Scheduler</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <input
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
      />

      <button onClick={bookAppointment}>Book</button>

      {appointments.map(app => (
        <div className="card" key={app.id}>
          <p><b>{app.name}</b></p>
          <p>{app.date} at {app.time}</p>
          <button onClick={() => deleteAppointment(app.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
