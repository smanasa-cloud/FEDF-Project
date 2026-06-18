import React, { useState } from "react";

function AppointmentManagement() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Ravi",
      doctor: "Dr. Rajesh Sharma",
      date: "2026-06-10",
      time: "09:00 AM",
    },
    {
      id: 2,
      patient: "Anitha",
      doctor: "Dr. Priya Mehta",
      date: "2026-06-11",
      time: "10:00 AM",
    },
  ]);

  const cancelAppointment = (id) => {
    setAppointments(
      appointments.filter(
        (appointment) => appointment.id !== id
      )
    );
  };

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#F8FAFC",
        fontFamily: "Segoe UI",
      }}
    >
        <button
  onClick={() => window.location.reload()}
  style={{
    background: "#2563EB",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
  }}
>
  ← Back
</button>
      <h1 style={{ color: "#2563EB" }}>
        📅 Appointment Management
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Patient</th>
            <th style={thStyle}>Doctor</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Time</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td style={tdStyle}>
                {appointment.patient}
              </td>

              <td style={tdStyle}>
                {appointment.doctor}
              </td>

              <td style={tdStyle}>
                {appointment.date}
              </td>

              <td style={tdStyle}>
                {appointment.time}
              </td>

              <td style={tdStyle}>
                <button
                  onClick={() =>
                    alert(
                      `Patient: ${appointment.patient}
Doctor: ${appointment.doctor}
Date: ${appointment.date}
Time: ${appointment.time}`
                    )
                  }
                  style={{
                    background: "#2563EB",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                >
                  View
                </button>

                <button
                  onClick={() =>
                    cancelAppointment(
                      appointment.id
                    )
                  }
                  style={{
                    background: "#DC2626",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: "1px solid #CBD5E1",
  padding: "10px",
  background: "#2563EB",
  color: "white",
};

const tdStyle = {
  border: "1px solid #CBD5E1",
  padding: "10px",
  textAlign: "center",
};

export default AppointmentManagement;