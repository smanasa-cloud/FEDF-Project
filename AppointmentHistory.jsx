import React from "react";

function AppointmentHistory() {
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

      <h1 style={{ color: "#2563EB" }}>
        📜 Appointment History
      </h1>

      <table
        style={{
          width: "100%",
          background: "white",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Fee Paid</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dr. Deepika Singh</td>
            <td>2026-05-20</td>
              <td>₹500</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentHistory;