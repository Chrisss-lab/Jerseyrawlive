import React from "react";

function Contact() {
  return (
    <div
      style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#eaf7f0",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3em", color: "#2b6e44", marginBottom: "20px" }}>
        Get in Touch
      </h1>
      <p style={{ fontSize: "1.3em", maxWidth: "600px", marginBottom: "15px" }}>
        Have questions, want to place an order, or need help with a custom mix? 
        We’re here to help!
      </p>
      <p style={{ fontSize: "1.2em", maxWidth: "600px", marginBottom: "10px" }}>
        Email us anytime at{" "}
        <a 
          href="mailto:JerseyRawHelp@gmail.com" 
          style={{ color: "#2b6e44", fontWeight: "bold", textDecoration: "none" }}
        >
          JerseyRawHelp@gmail.com
        </a>
      </p>
      <p style={{ fontSize: "1.1em", maxWidth: "600px", marginTop: "10px", color: "#555" }}>
        If you want to make a <strong>custom order</strong> or have <strong>special dietary restrictions</strong>, just let us know! We love creating personalized blends for your furry friend.
      </p>
      <div
        style={{
          marginTop: "30px",
          padding: "20px 40px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "500px",
        }}
      >
        <p style={{ fontSize: "1.2em", color: "#2b6e44", margin: 0 }}>
          🐾 We’ll get back to you as quickly as possible!
        </p>
      </div>
    </div>
  );
}

export default Contact;
