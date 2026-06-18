import React from "react";

function MyAppointments() {
  const appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: "10px 20px",
          background: "#2563EB",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h1 style={{ color: "#2563EB" }}>📋 My Appointments</h1>

      <table
  style={{
    width: "100%",
    background: "white",
    borderCollapse: "collapse",
  }}
>
  <thead>
    <tr>
      <th>Doctor Name</th>
      <th>Department</th>
      <th>Date</th>
      <th>Time</th>
      <th>Status</th>
    </tr>
  </thead>

 <tbody>
  {appointments.map((appt) => (
    <tr key={appt.id}>
      <td>{appt.doctor}</td>
      <td>{appt.department}</td>
      <td>{appt.date}</td>
      <td>{appt.slot}</td>
      <td>{appt.status}</td>
    </tr>
  ))}
</tbody>
</table>
    </div>
  );
}

export default MyAppointments;