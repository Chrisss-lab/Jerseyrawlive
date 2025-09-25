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
  const linkStyle = { margin: "0 15px", textDecoration: "none", color: "#2b6e44", fontWeight: "bold" };
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

  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", color: "#333", backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
        {/* Header Navigation */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 40px", backgroundColor: "#fff", borderBottom: "2px solid #ddd", position: "sticky", top: 0, zIndex: 10 }}>
          <img src={logo} alt="Jersey Raw Logo - Fresh Raw Dog Food in Morris County NJ" style={{ height: "60px", width: "60px", borderRadius: "50%", objectFit: "cover", border: "2px solid #2b6e44" }} />
          <nav>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/recipes" style={linkStyle}>Recipes</Link>
            <Link to="/order" style={linkStyle}>Order Now</Link>
            <Link to="/calculator" style={linkStyle}>Food Calculator</Link>
            <Link to="/about" style={linkStyle}>About Us</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
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
                    <h1 style={{ fontSize: "3em" }}>Fresh Made-to-Order Raw Dog Meals in Morris County, NJ</h1>
                    <p style={{ fontSize: "1.2em", maxWidth: "700px", margin: "10px auto" }}>
                      Each meal is prepared fresh and tailored to your dog's unique needs using 100% USDA-approved meats and fresh produce.
                    </p>
                    <div>
                      <Link to="/recipes" style={buttonStyle}>Recipes</Link>
                      <Link to="/order" style={buttonStyle}>Order Now</Link>
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
        <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#2b6e44", color: "#fff", marginTop: "40px" }}>
          <p>&copy; {new Date().getFullYear()} Jersey Raw. Fresh Raw Dog Food in Morris County, NJ.</p>
          <p>Pickup by appointment with flexible hours. Text confirmation sent after order submission.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
