import React, { useState } from "react";

function PaymentPage() {
  const [method, setMethod] = useState("");
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
  if (!method) {
    alert("Please select a payment method");
    return;
  }

  setPaid(true);
};
if (paid) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8FAFC",
        fontFamily: "Segoe UI",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#10B981" }}>
          ✅ Payment Successful
        </h1>

        <h3>Transaction ID: TXN${Math.floor(Math.random() * 100000)}</h3>

        <p>Doctor: Dr. Rajesh Sharma</p>

        <p>Amount Paid: ₹800</p>
        <button
  onClick={() => window.location.reload()}
  style={{
    marginTop: "20px",
    padding: "12px 25px",
    background: "#2563EB",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px"
  }}
>
  ← Back to Dashboard
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
        padding: "40px",
        fontFamily: "Segoe UI",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563EB",
          }}
        >
          💳 Payment Page
        </h1>

        <h3>Appointment Summary</h3>

        <p>
          <strong>Doctor:</strong> Dr. Rajesh Sharma
        </p>

        <p>
          <strong>Consultation Fee:</strong> ₹800
        </p>

        <hr />

        <h3>Select Payment Method</h3>

        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={(e) => setMethod(e.target.value)}
          />
          UPI
        </label>

        <br />
        <br />

        <label>
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            onChange={(e) => setMethod(e.target.value)}
          />
          Credit Card
        </label>

        <br />
        <br />

        <label>
          <input
            type="radio"
            name="payment"
            value="Debit Card"
            onChange={(e) => setMethod(e.target.value)}
          />
          Debit Card
        </label>

        <br />
        <br />

        <label>
          <input
            type="radio"
            name="payment"
            value="Cash"
            onChange={(e) => setMethod(e.target.value)}
          />
          Cash at Hospital
        </label>

        <br />
        <br />

        <button
          onClick={handlePayment}
          style={{
            width: "100%",
            padding: "12px",
            background: "#10B981",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;