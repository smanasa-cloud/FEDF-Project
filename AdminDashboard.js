import React, { useState } from "react";

import DoctorManagement from "./DoctorManagement";
import AppointmentManagement from "./AppointmentManagement";
import PatientRecords from "./PatientRecords";

function AdminDashboard() {
  const [showDoctorManagement, setShowDoctorManagement] = useState(false);
  const [showAppointmentManagement, setShowAppointmentManagement] = useState(false);
  const [showPatientRecords, setShowPatientRecords] = useState(false);
  

  if (showDoctorManagement) {
    return <DoctorManagement />;
  }

  if (showAppointmentManagement) {
    return <AppointmentManagement />;
  }
  if (showPatientRecords) {
  return <PatientRecords />;
}

  return (
  <div
    style={{
      minHeight: "100vh",
    background: "linear-gradient(135deg, #E0F2FE, #F8FAFC)",
      padding: "40px",
      fontFamily: "Segoe UI",
    }}
  
>
    <div
  style={{
    maxWidth: "1200px",
    margin: "auto",
    background: "rgba(255,255,255,0.92)",
    padding: "30px",
    borderRadius: "20px",
    backdropFilter: "blur(8px)",
  }}
></div>
<button
  onClick={() => window.location.reload()}
  style={{
    background: "transparent",
    color: "#2563EB",
    border: "2px solid #2563EB",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "20px",
  }}
>
  ← Back to Home
</button>
      <h1
        style={{
          textAlign: "center",
          color: "#2563EB",
          marginBottom: "30px",
        }}
      >

        🏥 DOCEASE ADMIN DASHBOARD
      </h1>
      <div
  style={{
    ...cardStyle,
    marginBottom: "20px",
    maxWidth: "500px",
  }}
>
  
</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        
  
  

 
        <div
          style={cardStyle}
          onClick={() => setShowDoctorManagement(true)}
        >
          <h2>👨‍⚕️</h2>
          <h3>Doctor Management</h3>
          <p>Add, Edit and Delete Doctors</p>
        </div>

        <div
          style={cardStyle}
          onClick={() => setShowAppointmentManagement(true)}
        >
          <h2>📅</h2>
          <h3>Appointment Management</h3>
          <p>View and Manage Appointments</p>
        </div>
        <div
  style={cardStyle}
  onClick={() => setShowPatientRecords(true)}
>
  <h2>👥</h2>
  <h3>Patient Records</h3>
  <p>View Registered Patients</p>
</div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  cursor: "pointer",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

export default AdminDashboard;