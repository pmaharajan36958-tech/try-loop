import { useEffect } from "react";

export default function Toast({ message, clearToast }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearToast();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, clearToast]);

  if (!message) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50
                 bg-green-600 text-white
                 px-6 py-3 rounded-lg shadow-lg
                 animate-bounce"
    >
      {message}
    </div>
  );
}