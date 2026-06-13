import React, { useState } from "react";
import hospitalImage from "./hospital.jpg";



function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [role, setRole] = useState("");
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  

const [signupName, setSignupName] = useState("");
const [signupEmail, setSignupEmail] = useState("");
const [signupPassword, setSignupPassword] = useState("");

  const openLogin = (selectedRole) => {
    setRole(selectedRole);
    setShowLogin(true);
  };
  
if (showSignup) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8FAFC",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          width: "450px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          User Sign Up
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={signupName}
          onChange={(e) =>
            setSignupName(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          value={signupEmail}
          onChange={(e) =>
            setSignupEmail(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={(e) =>
            setSignupPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={() => {
            const user = {
              name: signupName,
              email: signupEmail,
              password: signupPassword,
            };

            localStorage.setItem(
              "user",
              JSON.stringify(user)
            );

            alert("Account created successfully!");

            setShowSignup(false);
          }}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ padding: "20px 40px" }}>
        <div
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#1E40AF",
          }}
        >
          ⚕️ DOCEASE
        </div>
      </div>

      {/* Main */}
      <div
        style={{
          display: "flex",
          padding: "20px 40px",
          gap: "30px",
        }}
      >
        {/* Left */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "70px",
              color: "#1E40AF",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            DOCEASE
          </h1>

          <h3
            style={{
              textAlign: "center",
              color: "#334155",
              marginTop: "10px",
            }}
          >
            Doctor Appointment Booking System
          </h3>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              color: "#0F766E",
              fontWeight: "bold",
            }}
          >
            ❤️ Your Health, Our Priority ❤️
          </div>

          {/* Cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            {[
              ["👤", "User", "#2563EB"],
              ["🩺", "Doctor", "#0F766E"],
              ["🛡️", "Admin", "#7C3AED"],
            ].map((item) => (
              <div
                onClick={() => openLogin(item[1])}
  
                style={{
                  width: "220px",
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "25px",
                  textAlign: "center",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ fontSize: "55px" }}>{item[0]}</div>

                <h2 style={{ color: item[2] }}>{item[1]}</h2>

                <p>
                  {item[1] === "User" &&
                    "Book appointments with ease"}
                  {item[1] === "Doctor" &&
                    "Manage appointments and patients"}
                  {item[1] === "Admin" &&
                    "Manage system activities"}
                </p>

                <button
                  onClick={() => openLogin(item[1])}
                  style={{
                    background: item[2],
                    color: "white",
                    border: "none",
                    padding: "10px 25px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Access →
                </button>
              </div>
            ))}
          </div>

          {/* Exit */}
          <div style={{ textAlign: "center", marginTop: "25px" }}>
            <button
              style={{
                background: "#DC2626",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              ✖ Exit Application
            </button>
          </div>

          {/* About + Contact */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: 1,
                background: "white",
                padding: "20px",
                borderRadius: "15px",
                minWidth: "250px",
              }}
            >
              <h2 style={{ color: "#0F766E" }}>
                📖 About Us
              </h2>

              <p style={{ lineHeight: "1.8" }}>
                DOCEASE is a modern healthcare platform
                designed to simplify doctor appointment
                booking and hospital management. Patients
                can schedule appointments online, doctors
                can manage schedules efficiently, and
                administrators can monitor healthcare
                operations through a secure system.
              </p>
            </div>

            <div
              style={{
                flex: 1,
                background: "white",
                padding: "20px",
                borderRadius: "15px",
                minWidth: "250px",
              }}
            >
              <h2 style={{ color: "#1E40AF" }}>
                📞 Contact Us
              </h2>

              <p>📞 +91 98765 43210</p>
              <p>✉ support@docease.com</p>
              <p>📍 Hyderabad, Telangana</p>
              <p>🌐 www.docease.com</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div style={{ flex: 1 }}>
          <img
  src={hospitalImage}
  alt="Hospital"
  style={{
    width: "100%",
    height: "750px",
    objectFit: "cover",
    borderTopLeftRadius: "120px",
    borderBottomLeftRadius: "120px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  }}
/>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              background: "white",
              marginTop: "15px",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div>
              <h4 style={{ color: "#10B981" }}>
                🛡 Secure & Safe
              </h4>
              <p>Your data is protected.</p>
            </div>

            <div>
              <h4 style={{ color: "#2563EB" }}>
                📅 Easy Booking
              </h4>
              <p>Book appointments easily.</p>
            </div>

            <div>
              <h4 style={{ color: "#7C3AED" }}>
                💜 Better Care
              </h4>
              <p>Connect with top doctors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      {showLogin && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "420px",
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowLogin(false)}
              style={{
                position: "absolute",
                right: "15px",
                top: "15px",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <div
              style={{
                textAlign: "center",
                fontSize: "55px",
              }}
            >
              👤
            </div>

            <h2
              style={{
                textAlign: "center",
                color: "#1E40AF",
              }}
            >
              {role} Sign In
            </h2>

           <label>
  {role === "Doctor"
    ? "Doctor Name"
    : "ID / Email"}
</label>

            <input
  type="text"
  placeholder={
    role === "Doctor"
      ? "Enter Doctor Name"
      : "Enter your ID"
  }
  value={loginId}
  onChange={(e) => setLoginId(e.target.value)}
  style={inputStyle}
/>

            <label>Password</label>

            <input
  type="password"
  placeholder="Enter password"
  value={loginPassword}
  onChange={(e) => setLoginPassword(e.target.value)}
  style={inputStyle}
/>

            <div
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>

            <button
  onClick={() => {
  if (role === "User") {
  const savedUser = JSON.parse(
    localStorage.getItem("user")
  );

  if (
    savedUser &&
    loginId === savedUser.email &&
    loginPassword === savedUser.password
  ) {
    setShowBooking(true);
  } else {
    alert("Invalid email or password");
  }
}else if (role === "Admin") {

  alert(
    "ID: " +
    loginId +
    " Password: " +
    loginPassword
  );

  if (
    loginId.trim() === "admin" &&
    loginPassword.trim() === "admin123"
  ) {
    setShowAdminDashboard(true);
  } else {
    alert("Invalid Admin Credentials");
  }
}
else if (role === "Doctor") {
  localStorage.setItem(
    "loggedInDoctor",
    loginId
  );

  setShowDoctorDashboard(true);
}
 } 
}
  style={{
    width: "100%",
    padding: "12px",
    background: "#2563EB",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }}
>
  Sign In
</button>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <a href="/">Forgot Password?</a>
             <a
  href="/"
  onClick={(e) => {
    e.preventDefault();
    setShowSignup(true);
  }}
>
  Sign Up
</a>
            </div>

            <button
              onClick={() => setShowLogin(false)}
              style={{
                width: "100%",
                marginTop: "15px",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                background: "#E5E7EB",
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          background: "#0F172A",
          color: "white",
          textAlign: "center",
          padding: "15px",
          marginTop: "20px",
        }}
      >
        © 2026 DOCEASE. All Rights Reserved.
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  marginBottom: "12px",
  border: "1px solid #D1D5DB",
  borderRadius: "8px",
};

export default Home;