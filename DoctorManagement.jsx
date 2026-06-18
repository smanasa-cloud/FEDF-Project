import React, { useState, useEffect } from "react";

function DoctorManagement() {
  const [departments, setDepartments] = useState([
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "ENT",
  "Ophthalmology",
  "Gynecology",
  "Psychiatry",
  "General Medicine",
]);
const [departmentName, setDepartmentName] = useState("");
const [doctorName, setDoctorName] = useState("");
const [doctorDepartment, setDoctorDepartment] = useState("");
const [experience, setExperience] = useState("");
const [fee, setFee] = useState("");
const [availableDate, setAvailableDate] = useState("");
const [availableTime, setAvailableTime] = useState("");
const [status, setStatus] = useState("Available");


  const [doctors, setDoctors] = useState(
  JSON.parse(localStorage.getItem("doctors")) || [
  {
    id: 1,
    doctorName: "Dr. Rajesh Sharma",
    doctorDepartment: "Cardiology",
    experience: "15 Years",
    fee: 800,
  },
  {
    id: 2,
    doctorName: "Dr. Priya Mehta",
    doctorDepartment: "Cardiology",
    experience: "10 Years",
    fee: 600,
  },
  {
    id: 3,
    doctorName: "Dr. Arjun Rao",
    doctorDepartment: "Neurology",
    experience: "18 Years",
    fee: 1000,
  },
  {
    id: 4,
    doctorName: "Dr. Sneha Reddy",
    doctorDepartment: "Neurology",
    experience: "8 Years",
    fee: 700,
  },
  {
    id: 5,
    doctorName: "Dr. Vikram Kumar",
    doctorDepartment: "Orthopedics",
    experience: "12 Years",
    fee: 750,
  },
  {
    id: 6,
    doctorName: "Dr. Anjali Singh",
    doctorDepartment: "Orthopedics",
    experience: "9 Years",
    fee: 600,
  },
  {
    id: 7,
    doctorName: "Dr. Kiran Patel",
    doctorDepartment: "Pediatrics",
    experience: "14 Years",
    fee: 850,
  },
  {
    id: 8,
    doctorName: "Dr. Nisha Verma",
    doctorDepartment: "Pediatrics",
    experience: "7 Years",
    fee: 500,
  },
  {
    id: 9,
    doctorName: "Dr. Ritu Agarwal",
    doctorDepartment: "Dermatology",
    experience: "11 Years",
    fee: 700,
  },
  {
    id: 10,
    doctorName: "Dr. Sameer Jain",
    doctorDepartment: "Dermatology",
    experience: "6 Years",
    fee: 450,
  },
  {
    id: 11,
    doctorName: "Dr. Rahul Verma",
    doctorDepartment: "ENT",
    experience: "16 Years",
    fee: 950,
  },
  {
    id: 12,
    doctorName: "Dr. Neha Kapoor",
    doctorDepartment: "ENT",
    experience: "9 Years",
    fee: 650,
  },
  {
    id: 13,
    doctorName: "Dr. Akash Gupta",
    doctorDepartment: "Ophthalmology",
    experience: "13 Years",
    fee: 800,
  },
  {
    id: 14,
    doctorName: "Dr. Pooja Nair",
    doctorDepartment: "Ophthalmology",
    experience: "8 Years",
    fee: 550,
  },
  {
    id: 15,
    doctorName: "Dr. Ananya Rao",
    doctorDepartment: "Gynecology",
    experience: "17 Years",
    fee: 1000,
  },
  {
    id: 16,
    doctorName: "Dr. Swetha Reddy",
    doctorDepartment: "Gynecology",
    experience: "10 Years",
    fee: 700,
  },
  {
    id: 17,
    doctorName: "Dr. Vivek Menon",
    doctorDepartment: "Psychiatry",
    experience: "20 Years",
    fee: 1200,
  },
  {
    id: 18,
    doctorName: "Dr. Kavya Sharma",
    doctorDepartment: "Psychiatry",
    experience: "12 Years",
    fee: 800,
  },
  {
    id: 19,
    doctorName: "Dr. Harish Kumar",
    doctorDepartment: "General Medicine",
    experience: "15 Years",
    fee: 900,
  },
  {
    id: 20,
    doctorName: "Dr. Deepika Singh",
    doctorDepartment: "General Medicine",
    experience: "9 Years",
    fee: 600,
  },
]);
useEffect(() => {
  if (!localStorage.getItem("doctors")) {
    localStorage.setItem(
      "doctors",
      JSON.stringify(doctors)
    );
  }
}, []);

  
  
 

  const addDepartment = () => {
    if (!departmentName) return;

    setDepartments([...departments, departmentName]);
    setDepartmentName("");
  };

  const addDoctor = () => {
    if (
      !doctorName ||
      !doctorDepartment ||
      !experience ||
      !fee
    ) {
      alert("Please fill all fields");
      return;
    }

    const newDoctor = {
  id: Date.now(),
  doctorName,
  doctorDepartment,
  experience,
  fee,
  availableDate,
  availableTime,
};
    const updatedDoctors = [...doctors, newDoctor];

setDoctors(updatedDoctors);

localStorage.setItem(
  "doctors",
  JSON.stringify(updatedDoctors)
);

    setDoctorName("");
    setDoctorDepartment("");
    setExperience("");
    setFee("");
  };
const deleteDoctor = (id) => {
  const updatedDoctors = doctors.filter(
    (doctor) => doctor.id !== id
  );

  setDoctors(updatedDoctors);

  localStorage.setItem(
    "doctors",
    JSON.stringify(updatedDoctors)
  );
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        padding: "30px",
        fontFamily: "Segoe UI",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
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
        <h1
          style={{
            textAlign: "center",
            color: "#1E40AF",
          }}
        >
          🏥 Doctor & Department Management
        </h1>

        <hr />

        <h2 style={{ color: "#0F766E" }}>
          Add Department
        </h2>

        <input
          type="text"
          placeholder="Department Name"
          value={departmentName}
          onChange={(e) =>
            setDepartmentName(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={addDepartment}
          style={buttonStyle}
        >
          Add Department
        </button>

        <h3>Departments</h3>

        <ul>
          {departments.map((dept, index) => (
            <li key={index}>{dept}</li>
          ))}
        </ul>

        <hr />

        <h2 style={{ color: "#0F766E" }}>
          Add Doctor
        </h2>

        <input
          type="text"
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) =>
            setDoctorName(e.target.value)
          }
          style={inputStyle}
        />

        <select
          value={doctorDepartment}
          onChange={(e) =>
            setDoctorDepartment(e.target.value)
          }
          style={inputStyle}
        >
          <option value="">
            Select Department
          </option>

          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(e) =>
            setExperience(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Consultation Fee"
          value={fee}
          onChange={(e) =>
            setFee(e.target.value)
          }
          style={inputStyle}
        />
        <input
  type="date"
  value={availableDate}
  onChange={(e) => setAvailableDate(e.target.value)}
  style={inputStyle}
/>

<input
  type="time"
  value={availableTime}
  onChange={(e) => setAvailableTime(e.target.value)}
  style={inputStyle}
/>
<select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  style={inputStyle}
>
  <option value="Available">Available</option>
  <option value="On Leave">On Leave</option>
  <option value="Fully Booked">Fully Booked</option>
</select>

        <button
          onClick={addDoctor}
          style={buttonStyle}
        >
          Add Doctor
        </button>

        <hr />

        <h2 style={{ color: "#0F766E" }}>
          Doctors List
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Doctor</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Experience</th>
              <th style={thStyle}>Fee</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td style={tdStyle}>
                  {doctor.doctorName}
                </td>

                <td style={tdStyle}>
                  {doctor.doctorDepartment}
                </td>

                <td style={tdStyle}>
                  {doctor.experience}
                </td>

                <td style={tdStyle}>
                  ₹{doctor.fee}
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      deleteDoctor(doctor.id)
                    }
                    style={{
                      background: "#DC2626",
                      color: "white",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #CBD5E1",
  borderRadius: "8px",
};

const buttonStyle = {
  background: "#2563EB",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  marginBottom: "20px",
};

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

export default DoctorManagement;