import React from "react";
import maleDoctor from "./male-doctor.png";
import femaleDoctor from "./female-doctor.png";
function DoctorProfiles({ onBack }) {
  const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    department: "Cardiology",
    experience: "15 Years",
    education: "MBBS, MD Cardiology",
    specialist: "Heart Diseases",
    fee: 800,
    rating: 4.9,
  },
  {
    name: "Dr. Priya Mehta",
    department: "Cardiology",
    experience: "10 Years",
    education: "MBBS, MD Cardiology",
    specialist: "Preventive Cardiology",
    fee: 600,
    rating: 4.8,
  },
  {
    name: "Dr. Arjun Rao",
    department: "Neurology",
    experience: "18 Years",
    education: "MBBS, DM Neurology",
    specialist: "Brain Disorders",
    fee: 1000,
    rating: 4.9,
  },
  {
    name: "Dr. Sneha Reddy",
    department: "Neurology",
    experience: "8 Years",
    education: "MBBS, DM Neurology",
    specialist: "Migraine Treatment",
    fee: 700,
    rating: 4.7,
  },
  {
    name: "Dr. Vikram Kumar",
    department: "Orthopedics",
    experience: "12 Years",
    education: "MBBS, MS Orthopedics",
    specialist: "Joint Replacement",
    fee: 750,
    rating: 4.8,
  },
  {
    name: "Dr. Anjali Singh",
    department: "Orthopedics",
    experience: "9 Years",
    education: "MBBS, MS Orthopedics",
    specialist: "Sports Injuries",
    fee: 600,
    rating: 4.7,
  },
  {
    name: "Dr. Kiran Patel",
    department: "Pediatrics",
    experience: "14 Years",
    education: "MBBS, MD Pediatrics",
    specialist: "Child Health",
    fee: 850,
    rating: 4.9,
  },
  {
    name: "Dr. Nisha Verma",
    department: "Pediatrics",
    experience: "7 Years",
    education: "MBBS, MD Pediatrics",
    specialist: "Newborn Care",
    fee: 500,
    rating: 4.6,
  },
  {
    name: "Dr. Ritu Agarwal",
    department: "Dermatology",
    experience: "11 Years",
    education: "MBBS, MD Dermatology",
    specialist: "Skin Disorders",
    fee: 700,
    rating: 4.8,
  },
  {
    name: "Dr. Sameer Jain",
    department: "Dermatology",
    experience: "6 Years",
    education: "MBBS, MD Dermatology",
    specialist: "Acne Treatment",
    fee: 450,
    rating: 4.5,
  },
  {
    name: "Dr. Rahul Verma",
    department: "ENT",
    experience: "16 Years",
    education: "MBBS, MS ENT",
    specialist: "Ear & Sinus Surgery",
    fee: 950,
    rating: 4.9,
  },
  {
    name: "Dr. Neha Kapoor",
    department: "ENT",
    experience: "9 Years",
    education: "MBBS, MS ENT",
    specialist: "Hearing Disorders",
    fee: 650,
    rating: 4.7,
  },
  {
    name: "Dr. Akash Gupta",
    department: "Ophthalmology",
    experience: "13 Years",
    education: "MBBS, MS Ophthalmology",
    specialist: "Cataract Surgery",
    fee: 800,
    rating: 4.8,
  },
  {
    name: "Dr. Pooja Nair",
    department: "Ophthalmology",
    experience: "8 Years",
    education: "MBBS, MS Ophthalmology",
    specialist: "Vision Care",
    fee: 550,
    rating: 4.6,
  },
  {
    name: "Dr. Ananya Rao",
    department: "Gynecology",
    experience: "17 Years",
    education: "MBBS, MD Gynecology",
    specialist: "Women's Health",
    fee: 1000,
    rating: 4.9,
  },
  {
    name: "Dr. Swetha Reddy",
    department: "Gynecology",
    experience: "10 Years",
    education: "MBBS, MD Gynecology",
    specialist: "Pregnancy Care",
    fee: 700,
    rating: 4.8,
  },
  {
    name: "Dr. Vivek Menon",
    department: "Psychiatry",
    experience: "20 Years",
    education: "MBBS, MD Psychiatry",
    specialist: "Mental Health",
    fee: 1200,
    rating: 5.0,
  },
  {
    name: "Dr. Kavya Sharma",
    department: "Psychiatry",
    experience: "12 Years",
    education: "MBBS, MD Psychiatry",
    specialist: "Stress Management",
    fee: 800,
    rating: 4.8,
  },
  {
    name: "Dr. Harish Kumar",
    department: "General Medicine",
    experience: "15 Years",
    education: "MBBS, MD General Medicine",
    specialist: "Chronic Diseases",
    fee: 900,
    rating: 4.9,
  },
  {
    name: "Dr. Deepika Singh",
    department: "General Medicine",
    experience: "9 Years",
    education: "MBBS, MD General Medicine",
    specialist: "Diabetes Care",
    fee: 600,
    rating: 4.7,
  },
];
const femaleDoctors = [
  "Dr. Priya Mehta",
  "Dr. Sneha Reddy",
  "Dr. Anjali Singh",
  "Dr. Nisha Verma",
  "Dr. Ritu Agarwal",
  "Dr. Neha Kapoor",
  "Dr. Pooja Nair",
  "Dr. Ananya Rao",
  "Dr. Swetha Reddy",
  "Dr. Kavya Sharma",
  "Dr. Deepika Singh",
];
  return (
    <div

      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
        <button
      onClick={onBack}
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
      ← Back to Dashboard
    </button>

      <h1
        style={{
          textAlign: "center",
          color: "#2563EB",
        }}
      >
        👨‍⚕️ Doctor Profiles
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {doctors.map((doc, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
  src={
    femaleDoctors.includes(doc.name)
      ? femaleDoctor
      : maleDoctor
  }
  alt={doc.name}
  style={{
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto",
    border: "3px solid #2563EB",
  }}
/>

            <h2
              style={{
                textAlign: "center",
                color: "#2563EB",
              }}
            >
              {doc.name}
            </h2>

            <p><strong>🏥 Department:</strong> {doc.department}</p>
            <p><strong>💼 Experience:</strong> {doc.experience}</p>
            <p><strong>🎓 Education:</strong> {doc.education}</p>
            <p><strong>🩺 Specialist In:</strong> {doc.specialist}</p>
            <p><strong>💰 Consultation Fee:</strong> ₹{doc.fee}</p>
            <p><strong>⭐ Rating:</strong> {doc.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorProfiles;