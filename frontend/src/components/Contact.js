import React from "react";

function Contact() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Contact Us</h1>

      <div style={{ marginBottom: "20px" }}>
        <h3>Phone Number:</h3>
        <p>+62 (123) 456-7890</p> {/* Replace with actual number */}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Email:</h3>
        <p>contact@dakomart.com</p> {/* Replace with actual email */}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Address:</h3>
        <p>123 DAKO Street, Jakarta, Indonesia</p>{" "}
        {/* Replace with actual address */}
      </div>
    </div>
  );
}

export default Contact;
