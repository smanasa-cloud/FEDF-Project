import React, { useState } from "react";

function DoctorDashboard() {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );
  const loggedInDoctor =
  localStorage.getItem("loggedInDoctor");
  const doctorAppointments = appointments.filter(
  (appt) => appt.doctor === loggedInDoctor
);


  const updateStatus = (index, status) => {
  const updatedAppointments = [...appointments];

  if (index === -1) return;

  updatedAppointments[index] = {
    ...updatedAppointments[index],
    status: status,
  };

  setAppointments(updatedAppointments);

  localStorage.setItem(
    "appointments",
    JSON.stringify(updatedAppointments)
  );

  if (status === "Cancelled") {
    const notifications =
      JSON.parse(localStorage.getItem("notifications")) || [];

    notifications.push({
  patientName: updatedAppointments[index].patientName,
  message: `Your appointment with Dr. ${updatedAppointments[index].doctor} has been cancelled.`,
  time: new Date().toLocaleString(),
});
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );
  }
};
  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
      <h1 style={{ color: "#2563EB" }}>
        👨‍⚕️ DOCEASE DOCTOR DASHBOARD
      </h1>

      <h2>📅 Today's Appointments</h2>

      {doctorAppointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        doctorAppointments.map((appt, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <p>
              <strong>Patient:</strong>{" "}
              {appt.patientName}
            </p>

            <p>
              <strong>Doctor:</strong>{" "}
              {appt.doctor}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {appt.date}
            </p>

            <p>
              <strong>Time:</strong>{" "}
              {appt.slot}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {appt.status}
            </p>

            <button
              onClick={() => updateStatus(
  appointments.findIndex(a => a === appt),
  "Completed"
)}
              style={{
                marginRight: "10px",
                background: "green",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              ✅ Complete
            </button>

            <button
              onClick={() => updateStatus(
  appointments.findIndex(a => a === appt),
  "Cancelled"
)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              ❌ Cancel
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DoctorDashboard;