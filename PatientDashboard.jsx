import React, { useState } from "react";
import patientBg from "./patient-dashboard-bg.png";
import AppointmentBooking from "./AppointmentBooking";
import MyAppointments from "./MyAppointments";
import AppointmentHistory from "./AppointmentHistory";
import DoctorProfiles from "./DoctorProfiles";

function PatientDashboard() {
    const [showBooking, setShowBooking] = useState(false);
    const [showMyAppointments, setShowMyAppointments] = useState(false);
const [showAppointmentHistory, setShowAppointmentHistory] = useState(false);
const [showDoctorProfiles, setShowDoctorProfiles] = useState(false);

  const [showNotifications, setShowNotifications] =
  useState(false);
  const loggedInPatient = localStorage.getItem("loggedInPatient");

const notifications =
  JSON.parse(localStorage.getItem("notifications")) || [];

const myNotifications = notifications.filter(
  (n) => n.patientName === loggedInPatient
);
const newNotificationCount = myNotifications.filter(
  (n) => !n.seen
).length;
  

if (showBooking) {
  return <AppointmentBooking />;
}
if (showMyAppointments) {
  return <MyAppointments />;
}

if (showAppointmentHistory) {
  return <AppointmentHistory />;
}
if (showDoctorProfiles) {
  return (
    <DoctorProfiles
      onBack={() => setShowDoctorProfiles(false)}
    />
  );
}
if (showNotifications) {
  return (
    <div style={{ padding: "30px" }}>
      <button
        onClick={() => setShowNotifications(false)}
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

      <h1>🔔 Notifications</h1>

      {myNotifications.length === 0 ? (
  <p>No notifications</p>
) : (
  myNotifications.map((n, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {n.message}
          </div>
        ))
      )}
    </div>
  );
}
  return (
    <div
  style={{
    minHeight: "100vh",
    backgroundImage: `url(${patientBg})`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
    padding: "30px",
    fontFamily: "Segoe UI",
  }}
>
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#2563EB" }}>
          🏥 Patient Dashboard
        </h1>

        <h3>Welcome, Patient</h3>
        <div
  style={{
    background: "#FFF3CD",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
></div>
  

        <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
          <div
  style={cardStyle}
  onClick={() => setShowBooking(true)}
>
  <h2>📅</h2>
  <h3>Book Appointment</h3>
</div>

          <div style={cardStyle}
          onClick={() => setShowMyAppointments(true)}>
             <h2>📋</h2>
  <h3>My Appointments</h3>

             
  </div>

  <div
  style={cardStyle}
  onClick={() => {
  const allNotifications =
    JSON.parse(localStorage.getItem("notifications")) || [];

  const updated = allNotifications.map((n) =>
    n.patientName === loggedInPatient
      ? { ...n, seen: true }
      : n
  );

  localStorage.setItem(
    "notifications",
    JSON.stringify(updated)
  );

  setShowNotifications(true);
}}
>
  <h2>🔔</h2>
  <h3>Notifications</h3>
  <p>{newNotificationCount} New Notifications</p>
</div>
          <div
  style={cardStyle}
  onClick={() => setShowDoctorProfiles(true)}
>
  <h2>👨‍⚕️</h2>
  <h3>Doctor Profiles</h3>
  
</div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  flex: 1,
  background: "#EFF6FF",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  cursor: "pointer",
};

export default PatientDashboard;