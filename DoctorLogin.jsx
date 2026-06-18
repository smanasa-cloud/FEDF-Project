import React, { useState } from "react";
import DoctorDashboard from "./DoctorDashboard";

function DoctorLogin() {
  const [doctor, setDoctor] = useState("");
  const [password, setPassword] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  const doctors = [
    "Dr. Rajesh Sharma",
    "Dr. Priya Mehta",
    "Dr. Arjun Rao",
    "Dr. Sneha Reddy",
    "Dr. Vikram Kumar",
    "Dr. Anjali Singh",
    "Dr. Kiran Patel",
    "Dr. Nisha Verma",
    "Dr. Ritu Agarwal",
    "Dr. Sameer Jain",
    "Dr. Rahul Verma",
    "Dr. Neha Kapoor",
    "Dr. Akash Gupta",
    "Dr. Pooja Nair",
    "Dr. Ananya Rao",
    "Dr. Swetha Reddy",
    "Dr. Vivek Menon",
    "Dr. Kavya Sharma",
    "Dr. Harish Kumar",
    "Dr. Deepika Singh",
  ];

  const handleLogin = () => {
    if (!doctor || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("loggedInDoctor", doctor);
    setShowDashboard(true);
  };

  if (showDashboard) {
    return <DoctorDashboard />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F1F5F9",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "70px",
          }}
        >
          👨‍⚕️
        </div>

        <h1
          style={{
            textAlign: "center",
            color: "#2563EB",
          }}
        >
          Doctor Sign In
        </h1>

        <label>
          <strong>Select Doctor</strong>
        </label>

        <select
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        >
          <option value="">Select Doctor</option>

          {doctors.map((doc) => (
            <option key={doc} value={doc}>
              {doc}
            </option>
          ))}
        </select>

        <label>
          <strong>Password</strong>
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default DoctorLogin;