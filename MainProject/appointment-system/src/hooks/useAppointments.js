import { useEffect, useState } from "react";

export function useAppointments() {
  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem("appointments");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return { appointments, setAppointments };
}