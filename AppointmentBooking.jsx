import React, { useState } from "react";
import PaymentPage from "./PaymentPage";
import PatientDashboard from "./PatientDashboard";

function AppointmentBooking() {
 const doctors =
  JSON.parse(localStorage.getItem("doctors")) || [];
  const doctorDetails = {

  "Dr. Rajesh Sharma": { experience: "15 Years", fee: 800 },
  "Dr. Priya Mehta": { experience: "10 Years", fee: 600 },

  "Dr. Arjun Rao": { experience: "18 Years", fee: 1000 },
  "Dr. Sneha Reddy": { experience: "8 Years", fee: 700 },

  "Dr. Vikram Kumar": { experience: "12 Years", fee: 750 },
  "Dr. Anjali Singh": { experience: "9 Years", fee: 600 },

  "Dr. Kiran Patel": { experience: "14 Years", fee: 850 },
  "Dr. Nisha Verma": { experience: "7 Years", fee: 500 },

  "Dr. Ritu Agarwal": { experience: "11 Years", fee: 700 },
  "Dr. Sameer Jain": { experience: "6 Years", fee: 450 },

  "Dr. Rahul Verma": { experience: "16 Years", fee: 950 },
  "Dr. Neha Kapoor": { experience: "9 Years", fee: 650 },

  "Dr. Akash Gupta": { experience: "13 Years", fee: 800 },
  "Dr. Pooja Nair": { experience: "8 Years", fee: 550 },

  "Dr. Ananya Rao": { experience: "17 Years", fee: 1000 },
  "Dr. Swetha Reddy": { experience: "10 Years", fee: 700 },

  "Dr. Vivek Menon": { experience: "20 Years", fee: 1200 },
  "Dr. Kavya Sharma": { experience: "12 Years", fee: 800 },

  "Dr. Harish Kumar": { experience: "15 Years", fee: 900 },
  "Dr. Deepika Singh": { experience: "9 Years", fee: 600 }
};

const doctorSlots = {
  "Dr. Rajesh Sharma": ["09:00 AM", "10:00 AM", "11:00 AM"],
  "Dr. Priya Mehta": ["02:00 PM", "03:00 PM", "04:00 PM"],
  "Dr. Arjun Rao": ["10:00 AM", "11:00 AM", "12:00 PM"],
  "Dr. Sneha Reddy": ["03:00 PM", "04:00 PM", "05:00 PM"],
  "Dr. Vikram Kumar": ["09:00 AM", "10:00 AM", "11:00 AM"],
  "Dr. Anjali Singh": ["02:00 PM", "03:00 PM", "04:00 PM"],
  "Dr. Kiran Patel": ["09:00 AM", "10:00 AM", "11:00 AM"],
  "Dr. Nisha Verma": ["01:00 PM", "02:00 PM", "03:00 PM"]
};
const bookedSlots = [
  {
    doctor: "Dr. Rajesh Sharma",
    date: "2026-06-10",
    time: "09:00 AM - 10:00 AM",
  },
];


  const [patientName, setPatientName] = useState(
  localStorage.getItem("loggedInPatient") || ""
);
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const [appointments, setAppointments] = useState(
  JSON.parse(localStorage.getItem("appointments")) || []
);
  const [message, setMessage] = useState("");
const [showPayment, setShowPayment] = useState(false);
const [goBack, setGoBack] = useState(false);

if (goBack) {
  return <PatientDashboard />;
}
  const handleBooking = () => {
    if (
      !patientName ||
      !department ||
      !doctor ||
      !date ||
      !slot
    ) {
      setMessage("Please fill all fields.");
      return;
    }
    const alreadyBooked = appointments.some(
    (appt) =>
      appt.doctor === doctor &&
      appt.date === date &&
      appt.slot === slot
  );

  if (alreadyBooked) {
    setMessage(
      "This doctor is already booked at this time. Please select another slot."
    );
    return;
  }

    const appointment = {
      id: "DOC" + Math.floor(Math.random() * 10000),
      patientName,
      department,
      doctor,
      date,
      slot,
      status: "Confirmed",
    };

    const updatedAppointments = [
  ...appointments,
  appointment,
];
localStorage.setItem(
  "appointments",
  JSON.stringify(updatedAppointments)
);

setAppointments(updatedAppointments);

localStorage.setItem(
  "appointments",
  JSON.stringify(updatedAppointments)
);

    setMessage(
      `Appointment booked successfully with ${doctor}`
    );

    setPatientName("");
    setDepartment("");
    setDoctor("");
    setDate("");
    setSlot("");
  };

  const cancelAppointment = (id) => {
    const updated = appointments.map((appt) =>
      appt.id === id
        ? { ...appt, status: "Cancelled" }
        : appt
    );

    setAppointments(updated);
  };
  if (showPayment) {
  return <PaymentPage />;
}

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F1F5F9",
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
        <button
  onClick={() => setGoBack(true)}
  style={{
    padding: "10px 20px",
    background: "#2563EB",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
  }}
>
  ← Back to Dashboard
</button>
        <h1
          style={{
            textAlign: "center",
            color: "#2563EB",
          }}
        >
          🏥 DOCEASE Appointment Booking
        </h1>

        <input
  type="text"
  value={patientName}
  readOnly
  style={inputStyle}
/>

        <select
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            setDoctor("");
          }}
          style={inputStyle}
        >
          <option value="">
            Select Department
          </option>
{[...new Set(doctors.map((d) => d.doctorDepartment))].map((dept) => (
  <option key={dept} value={dept}>
    {dept}
  </option>
))}
        </select>

        <select
          value={doctor}
          onChange={(e) =>
            setDoctor(e.target.value)
          }
          style={inputStyle}
        >
          <option value="">
            Select Doctor
          </option>

          {doctors
  .filter((d) => d.doctorDepartment === department)
  .map((d) => (
    <option key={d.id} value={d.doctorName}>
      {d.doctorName}
    </option>
))}
        </select>
        

{doctor && (
  <div
    style={{
      background: "#EFF6FF",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px"
    }}
  >
    <h4>Doctor Details</h4>

    <p>
      Experience: {doctorDetails[doctor]?.experience}
    </p>

    <p>
      Consultation Fee: ₹{doctorDetails[doctor]?.fee}
    </p>
  </div>
)}

<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  style={inputStyle}
/>

        

        <select
          value={slot}
          onChange={(e) =>
            setSlot(e.target.value)
          }
          style={inputStyle}
        >
          <option value="">
            Select Time Slot
          </option>

          <option>09:00 AM</option>
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>02:00 PM</option>
          <option>03:00 PM</option>
          <option>04:00 PM</option>
        </select>

        <button
          onClick={handleBooking}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Book Appointment
        </button>

        {message && (
          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              background: "#DCFCE7",
              color: "#166534",
              borderRadius: "10px",
            }}
          >
            {message}
          </div>
        )}
        {message && (
  <button
    onClick={() => setShowPayment(true)}
    style={{
      width: "100%",
      padding: "12px",
      marginTop: "15px",
      background: "#10B981",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
    }}
  >
    Proceed to Payment 💳
  </button>
)}

        <h2
          style={{
            marginTop: "40px",
            color: "#0F172A",
          }}
        >
          📋 My Appointments
        </h2>

        {appointments.length === 0 ? (
          <p>No appointments booked.</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Doctor</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Time</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td style={tdStyle}>{appt.id}</td>
                  <td style={tdStyle}>{appt.doctor}</td>
                  <td style={tdStyle}>{appt.date}</td>
                  <td style={tdStyle}>{appt.slot}</td>
                  <td style={tdStyle}>
                    {appt.status}
                  </td>

                  <td style={tdStyle}>
                    {appt.status ===
                    "Confirmed" ? (
                      <button
                        onClick={() =>
                          cancelAppointment(
                            appt.id
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
                    ) : (
                      "Cancelled"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #CBD5E1",
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

export default AppointmentBooking;