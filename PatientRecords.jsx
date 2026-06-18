import React, { useState } from "react";

function PatientRecords() {
  const appointments =
  JSON.parse(localStorage.getItem("appointments")) || [];

    const [searchTerm, setSearchTerm] = useState("");
  const patients = [
    {
      id: 1,
      name: "Ravi Kumar",
      age: 25,
      gender: "Male",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Anitha Reddy",
      age: 30,
      gender: "Female",
      phone: "9876543211",
    },
    {
      id: 3,
      name: "Kiran Patel",
      age: 22,
      gender: "Male",
      phone: "9876543212",
    },
  ];
  const filteredAppointments = appointments.filter((appt) =>
  appt.patientName
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);

  const downloadCSV = () => {
    const csvData = [
      ["ID", "Name", "Age", "Gender", "Phone"],
      ...patients.map((p) => [
        p.id,
        p.name,
        p.age,
        p.gender,
        p.phone,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvData], {
      type: "text/csv",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "patients.csv";
    a.click();
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
        👥 Patient Records
      </h1>

      <button
        onClick={downloadCSV}
        style={{
          background: "#16A34A",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        📄 Download CSV
      </button>
<input
  type="text"
  placeholder="🔍 Search Patient by Name"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    width: "300px",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
  }}
/>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th>Patient Name</th>
<th>Department</th>
<th>Doctor</th>
<th>Date</th>
<th>Time</th>
<th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredAppointments.map((appt) => (
  <tr key={appt.id}>
    <td>{appt.patientName}</td>
    <td>{appt.department}</td>
    <td>{appt.doctor}</td>
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

export default PatientRecords;