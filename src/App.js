import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Ingredients from "./Ingredients.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Order from "./Order.js";
import FetchRecipes from "./FetchRecipes.js";
import Calculator from "./Calculator.js";

import logo from "./photo-jersey-raw-logo.jpg";

function App() {
  const linkStyle = {
    textDecoration: "none",
    color: "#2b6e44",
    fontWeight: "bold",
    padding: "10px 12px",
    textAlign: "center",
    borderRadius: "8px",
    backgroundColor: "#e6f1ea",
    margin: "4px",
    minWidth: "70px",
    display: "inline-block",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "15px 30px",
    margin: "15px",
    backgroundColor: "#2b6e44",
    color: "#fff",
    fontSize: "1.2em",
    fontWeight: "bold",
    borderRadius: "10px",
    textDecoration: "none",
    transition: "all 0.2s",
  };

  const cardStyle = {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "25px",
    backgroundColor: "#ffffffcc",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const heroStyle = {
    position: "relative",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px 20px",
    borderRadius: "12px",
    margin: "20px auto",
    maxWidth: "900px",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: "12px",
    zIndex: 1,
  };

  const heroTextStyle = {
    position: "relative",
    zIndex: 2,
    textShadow: "1px 1px 6px rgba(0,0,0,0.8)",
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Recipes", path: "/recipes" },
    { label: "Order Now", path: "/order" },
    { label: "Food Calculator", path: "/calculator" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Router>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          backgroundColor: "#f4f6f8",
          minHeight: "100vh",
        }}
      >
        {/* Header Navigation */}
        <header
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#fff",
            borderBottom: "2px solid #ddd",
            position: "sticky",
            top: 0,
            zIndex: 10,
            gap: "6px",
          }}
        >
          <img
            src={logo}
            alt="Jersey Raw Logo - Fresh Raw Dog Food in Morris County NJ"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #2b6e44",
            }}
          />
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            {navItems.map((item, idx) => (
              <Link key={idx} to={item.path} style={linkStyle}>
                {item.label.split(" ").map((word, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {word}
                  </span>
                ))}
              </Link>
            ))}
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ textAlign: "center" }}>
                {/* Hero Section */}
                <div style={heroStyle}>
                  <div style={overlayStyle}></div>
                  <div style={heroTextStyle}>
                    <h1 style={{ fontSize: "3em" }}>
                      Fresh Made-to-Order Raw Dog Meals in Morris County, NJ
                    </h1>
                    <p style={{ fontSize: "1.2em", maxWidth: "700px", margin: "10px auto" }}>
                      Each meal is prepared fresh and tailored to your dog's unique needs using 100% USDA-approved meats and fresh produce.
                    </p>
                    <div>
                      <Link to="/recipes" style={buttonStyle}>
                        Recipes
                      </Link>
                      <Link to="/order" style={buttonStyle}>
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* About Section */}
                <div style={cardStyle}>
                  <h2>Why Choose Jersey Raw?</h2>
                  <p style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
                    At Jersey Raw, your dog gets <strong>100% fresh, USDA-approved meats, organs, and produce</strong> — no fillers, artificial ingredients, or preservatives.
                  </p>
                  <p style={{ fontSize: "1.1em", lineHeight: "1.6", marginTop: "15px" }}>
                    Serving Morris County, NJ, our mission is simple: fuel your dog’s health with fresh, safe, and balanced raw meals.
                  </p>
                  <p style={{ fontSize: "1.1em", lineHeight: "1.6", marginTop: "15px", fontWeight: "bold", color: "#2b6e44" }}>
                    Orders are picked up in <strong>Morris County, New Jersey</strong> by appointment.  
                    After submitting your order, you’ll receive a text message to schedule a convenient pickup date and time — with very flexible hours to fit your schedule.
                  </p>
                </div>
              </div>
            }
          />
          <Route path="/ingredients" element={<div style={cardStyle}><Ingredients /></div>} />
          <Route path="/about" element={<div style={cardStyle}><About /></div>} />
          <Route path="/contact" element={<div style={cardStyle}><Contact /></div>} />
          <Route path="/order" element={<div style={cardStyle}><Order /></div>} />
          <Route path="/recipes" element={<div style={cardStyle}><FetchRecipes /></div>} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#2b6e44",
            color: "#fff",
            marginTop: "40px",
          }}
        >
          <p>&copy; {new Date().getFullYear()} Jersey Raw. Fresh Raw Dog Food in Morris County, NJ.</p>
          <p>Pickup by appointment with flexible hours. Text confirmation sent after order submission.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
