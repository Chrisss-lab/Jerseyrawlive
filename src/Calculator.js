// src/Calculator.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./photo-jersey-raw-logo.jpg";

const dogBreeds = [
  { name: "Labrador Retriever", nickname: "Lab", lifeSpanYears: 12 },
  { name: "German Shepherd", nickname: "GSD", lifeSpanYears: 11 },
  { name: "Golden Retriever", nickname: "Golden", lifeSpanYears: 12 },
  { name: "Bulldog", nickname: "English Bulldog", lifeSpanYears: 10 },
  { name: "French Bulldog", nickname: "Frenchie", lifeSpanYears: 12 },
  { name: "Beagle", nickname: "", lifeSpanYears: 14 },
  { name: "Rottweiler", nickname: "", lifeSpanYears: 10 },
  { name: "Pit Bull", nickname: "American Pit Bull", lifeSpanYears: 13 },
  { name: "Cane Corso", nickname: "", lifeSpanYears: 10 },
  { name: "Boxer", nickname: "", lifeSpanYears: 10 },
  { name: "Siberian Husky", nickname: "Husky", lifeSpanYears: 13 },
  { name: "Dachshund", nickname: "", lifeSpanYears: 15 },
  { name: "Poodle", nickname: "", lifeSpanYears: 14 },
  { name: "Australian Shepherd", nickname: "Aussie", lifeSpanYears: 13 },
  { name: "Doberman", nickname: "", lifeSpanYears: 11 },
  { name: "Yorkshire Terrier", nickname: "Yorkie", lifeSpanYears: 15 },
  { name: "Great Dane", nickname: "", lifeSpanYears: 8 },
  // ...add remaining breeds up to 100
];

// Example recipes
const allRecipes = [
  { name: "Daily Thrive" },
  { name: "Growing Paws Puppy Blend" },
  { name: "Golden Years Senior Formula" },
  { name: "Joint Support Adult Blend" },
];

const activityMultipliers = {
  low: 0.9,
  moderate: 1,
  high: 1.2,
  "very high": 1.35,
};

const goalMultipliers = {
  lose_weight: 0.85,
  lose_some: 0.95,
  maintain: 1,
  gain_some: 1.1,
  needs_gain: 1.2,
};

const getLifeStage = (ageMonths, breed) => {
  const ageYears = ageMonths / 12;
  const smallBreeds = ["Yorkshire Terrier", "Dachshund", "Poodle", "Beagle", "French Bulldog", "Bulldog"];
  const largeBreeds = ["Great Dane", "Rottweiler", "Cane Corso", "German Shepherd", "Labrador Retriever", "Golden Retriever", "Doberman", "Boxer"];

  let stage = "adult";
  if (smallBreeds.includes(breed.name)) stage = ageYears < 1 ? "puppy" : ageYears > 10 ? "senior" : "adult";
  else if (largeBreeds.includes(breed.name)) stage = ageYears < 2 ? "puppy" : ageYears > 8 ? "senior" : "adult";
  else stage = ageYears < 1.5 ? "puppy" : ageYears > 10 ? "senior" : "adult";
  return stage;
};

const baseFeedingPercent = (stage) => {
  if (stage === "puppy") return 0.05;
  if (stage === "adult") return 0.025;
  if (stage === "senior") return 0.022;
  return 0.025;
};

export default function Calculator() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [breed, setBreed] = useState(null);
  const [showDropdown, setShowDropdown] = useState(true);
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [meals, setMeals] = useState(2);
  const [daysUntilNextOrder, setDaysUntilNextOrder] = useState(7);
  const [result, setResult] = useState(null);
  const [selectedMix, setSelectedMix] = useState("");

  const filteredBreeds = dogBreeds
    .filter(
      (b) =>
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        (b.nickname && b.nickname.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    if (breed && weight && (ageYears || ageMonths) && daysUntilNextOrder) {
      const totalMonths = ageYears * 12 + (ageMonths || 0);
      const stage = getLifeStage(totalMonths, breed);
      const basePercent = baseFeedingPercent(stage);

      const dailyFood = weight * basePercent * activityMultipliers[activity] * goalMultipliers[goal];
      const perMeal = dailyFood / meals;
      const totalNeeded = dailyFood * daysUntilNextOrder;

      setResult({ stage, dailyFood: dailyFood.toFixed(2), perMeal: perMeal.toFixed(2), totalNeeded: totalNeeded.toFixed(2) });
    } else {
      setResult(null);
    }
  }, [breed, weight, activity, goal, ageYears, ageMonths, meals, daysUntilNextOrder]);

  const handleOrderNow = () => {
    if (!selectedMix) return alert("Please select a recipe.");
    if (!result || result.totalNeeded <= 0) return alert("Total food must be above 0.");

    navigate("/order", {
      state: {
        recipe: selectedMix,
        totalFood: result.totalNeeded,
        breed: breed.name,
        weight,
        meals,
        activity,
        goal,
      },
    });
  };

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
      <img src={logo} alt="Logo" style={{ width: "120px", marginBottom: "20px" }} />
      <h2 style={{ color: "#2b6e44" }}>Dog Food Calculator</h2>
      <p>Enter your dog's info to see recommended daily food intake for a raw diet.</p>

      {/* Breed Search */}
      <div style={{ margin: "15px 0", position: "relative" }}>
        <label>Breed:</label>
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setBreed(null); setShowDropdown(true); }}
          placeholder="Type breed..."
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        {showDropdown && search && filteredBreeds.length > 0 && (
          <ul style={{
            position: "absolute",
            background: "#fff",
            width: "100%",
            maxHeight: "150px",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginTop: "5px",
            zIndex: 10,
            listStyle: "none",
            padding: 0
          }}>
            {filteredBreeds.map((b, idx) => (
              <li
                key={idx}
                style={{ padding: "10px", cursor: "pointer", borderBottom: "1px solid #eee" }}
                onClick={() => { setBreed(b); setSearch(b.name); setShowDropdown(false); }}
              >
                {b.name} {b.nickname && `(${b.nickname})`}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Inputs */}
      <div style={{ margin: "15px 0" }}>
        <label>Weight (lbs):</label>
        <input type="number" min="1" value={weight} onChange={(e) => setWeight(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }} />
      </div>

      <div style={{ margin: "15px 0", display: "flex", gap: "10px" }}>
        <div style={{ flex: 1 }}>
          <label>Age (years):</label>
          <input type="number" min="0" value={ageYears} onChange={(e) => setAgeYears(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ flex: 1 }}>
          <label>Age (months):</label>
          <input type="number" min="0" max="11" value={ageMonths} onChange={(e) => setAgeMonths(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
        </div>
      </div>

      <div style={{ margin: "15px 0" }}>
        <label>Activity Level:</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }}>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
          <option value="very high">Very High</option>
        </select>
      </div>

      <div style={{ margin: "15px 0" }}>
        <label>Goal:</label>
        <select value={goal} onChange={(e) => setGoal(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }}>
          <option value="lose_weight">Lose Weight</option>
          <option value="lose_some">Lose Some</option>
          <option value="maintain">Maintain</option>
          <option value="gain_some">Gain Some</option>
          <option value="needs_gain">Needs Gain</option>
        </select>
      </div>

      <div style={{ margin: "15px 0" }}>
        <label>Meals per Day:</label>
        <input type="number" min="1" value={meals} onChange={(e) => setMeals(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
      </div>

      <div style={{ margin: "15px 0" }}>
        <label>Days until next order:</label>
        <input type="number" min="1" value={daysUntilNextOrder} onChange={(e) => setDaysUntilNextOrder(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
      </div>

      {/* Results & Recipe */}
      {result && (
        <div style={{ marginTop: "20px", backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "8px" }}>
          <p><strong>Life Stage:</strong> {result.stage}</p>
          <p><strong>Daily Food (lbs):</strong> {result.dailyFood}</p>
          <p><strong>Per Meal (lbs):</strong> {result.perMeal}</p>
          <p><strong>Total Needed for Next {daysUntilNextOrder} Days (lbs):</strong> {result.totalNeeded}</p>

          <div style={{ marginTop: "10px" }}>
            <label>Select Recipe:</label>
            <select value={selectedMix} onChange={(e) => setSelectedMix(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }}>
              <option value="">-- Select a Recipe --</option>
              {allRecipes.map((r, idx) => <option key={idx} value={r.name}>{r.name}</option>)}
            </select>
          </div>

          <button onClick={handleOrderNow} disabled={!selectedMix || result.totalNeeded <= 0} style={{
            padding: "12px 25px",
            marginTop: "15px",
            backgroundColor: selectedMix && result.totalNeeded > 0 ? "#2b6e44" : "#ccc",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: selectedMix && result.totalNeeded > 0 ? "pointer" : "not-allowed",
          }}>
            Order Now
          </button>
        </div>
      )}
    </div>
  );
}
