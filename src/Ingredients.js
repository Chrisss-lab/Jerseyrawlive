// src/Ingredients.js
import React from "react";

const categories = [
  {
    title: "🐾 Meats & Animal Proteins",
    items: [
      { name: "Chicken", desc: "Lean, highly digestible protein that builds strong, healthy muscles.", img: "https://via.placeholder.com/150?text=Chicken" },
      { name: "Beef", desc: "Rich in protein, iron, and B vitamins for energy, strength, and vitality.", img: "https://via.placeholder.com/150?text=Beef" },
      { name: "Beef Liver", desc: "Packed with vitamin A, iron, copper, and B vitamins for immune and energy support.", img: "https://via.placeholder.com/150?text=Beef+Liver" },
      { name: "Beef Heart", desc: "Nutrient-rich muscle meat, high in taurine for heart health.", img: "https://via.placeholder.com/150?text=Beef+Heart" },
      { name: "Grass-Fed Beef", desc: "Premium nutrition with omega-3s and CLA to support overall health.", img: "https://via.placeholder.com/150?text=Grass-Fed+Beef" },
      { name: "Pork", desc: "Complete protein source with essential amino acids for growth and repair.", img: "https://via.placeholder.com/150?text=Pork" },
      { name: "Chicken Gizzards", desc: "Rich in protein, zinc, and iron. Supports metabolism and immunity.", img: "https://via.placeholder.com/150?text=Gizzards" },
      { name: "Chicken Bones", desc: "Natural calcium and phosphorus for strong bones and teeth.", img: "https://via.placeholder.com/150?text=Chicken+Bones" },
      { name: "Tilapia", desc: "Lean, mild fish protein, easy to digest.", img: "https://via.placeholder.com/150?text=Tilapia" },
      { name: "Wild Caught Salmon", desc: "High in omega-3s. Supports skin, joints, and cardiovascular health.", img: "https://via.placeholder.com/150?text=Salmon" },
      { name: "Sole Fish", desc: "Gentle, low-fat white fish for sensitive diets.", img: "https://via.placeholder.com/150?text=Sole" },
      { name: "Sardines", desc: "Omega-3 rich with edible bones for calcium and joint support.", img: "https://via.placeholder.com/150?text=Sardines" },
      { name: "Duck", desc: "Rich novel protein, great for dogs with allergies.", img: "https://via.placeholder.com/150?text=Duck" },
    ],
  },
  {
    title: "✅ Fats & Oils",
    items: [
      { name: "Pork Fat", desc: "Dense energy source. Supports healthy weight and flavor.", img: "https://via.placeholder.com/150?text=Pork+Fat" },
      { name: "Grass-Fed Beef Tallow", desc: "Nutrient-dense fat for flavor and energy.", img: "https://via.placeholder.com/150?text=Beef+Tallow" },
      { name: "Coconut Oil", desc: "MCT-rich. Promotes digestion, skin health, and energy.", img: "https://via.placeholder.com/150?text=Coconut+Oil" },
      { name: "Salmon Oil", desc: "Premium omega-3s for coat shine and joint health.", img: "https://via.placeholder.com/150?text=Salmon+Oil" },
      { name: "Cod Liver Oil", desc: "Natural vitamin A & D plus omega-3s.", img: "https://via.placeholder.com/150?text=Cod+Liver+Oil" },
    ],
  },
  {
    title: "✅ Dairy & Egg",
    items: [
      { name: "Eggs", desc: "Complete protein with vitamins and healthy fats.", img: "https://via.placeholder.com/150?text=Eggs" },
      { name: "Greek Yogurt", desc: "Probiotic-rich for gut and immune health.", img: "https://via.placeholder.com/150?text=Greek+Yogurt" },
      { name: "Cottage Cheese", desc: "Gentle calcium-rich protein.", img: "https://via.placeholder.com/150?text=Cottage+Cheese" },
      { name: "Milk Protein Powder", desc: "Concentrated protein for muscle support.", img: "https://via.placeholder.com/150?text=Milk+Protein" },
      { name: "Kefir", desc: "Fermented milk full of probiotics.", img: "https://via.placeholder.com/150?text=Kefir" },
    ],
  },
  {
    title: "✅ Fruits & Vegetables",
    items: [
      { name: "Pumpkin", desc: "High in fiber, supports digestive health.", img: "https://via.placeholder.com/150?text=Pumpkin" },
      { name: "Carrots", desc: "Rich in vitamin A and antioxidants for vision and immunity.", img: "https://via.placeholder.com/150?text=Carrots" },
      { name: "Blueberries", desc: "Superfood antioxidant powerhouse.", img: "https://via.placeholder.com/150?text=Blueberries" },
      { name: "Sweet Potato", desc: "Fiber and beta-carotene for healthy digestion and energy.", img: "https://via.placeholder.com/150?text=Sweet+Potato" },
      { name: "Broccoli", desc: "Vitamin C and K for immunity and overall health.", img: "https://via.placeholder.com/150?text=Broccoli" },
      { name: "Cabbage", desc: "Gentle, fiber-rich veggie for digestion.", img: "https://via.placeholder.com/150?text=Cabbage" },
    ],
  },
  {
    title: "✅ Supplements & Add-Ons",
    items: [
      { name: "Egg Shells", desc: "Natural calcium source for bones and teeth.", img: "https://via.placeholder.com/150?text=Egg+Shells" },
      { name: "Bone Broth Powder", desc: "Collagen and amino acids for joints and digestion.", img: "https://via.placeholder.com/150?text=Bone+Broth" },
      { name: "Kelp Powder", desc: "Mineral-rich superfood with iodine for thyroid health.", img: "https://via.placeholder.com/150?text=Kelp+Powder" },
      { name: "Beet Pulp", desc: "Digestible fiber for healthy gut function.", img: "https://via.placeholder.com/150?text=Beet+Pulp" },
      { name: "Local Raw Honey", desc: "Supports allergies and overall health.", img: "https://via.placeholder.com/150?text=Raw+Honey" },
      { name: "Organic Apple Cider Vinegar", desc: "Supports digestion and provides trace nutrients.", img: "https://via.placeholder.com/150?text=ACV" },
      { name: "Organic Sauerkraut", desc: "Natural probiotic for gut health.", img: "https://via.placeholder.com/150?text=Sauerkraut" },
    ],
  },
];

const categoryStyle = { marginBottom: "40px" };
const ingredientCardStyle = {
  backgroundColor: "#fff",
  padding: "15px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};
const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" };
const imgStyle = { width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" };

function Ingredients() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>🐾 Dog Food Ingredient Benefits Guide</h1>
      {categories.map((cat, i) => (
        <div key={i} style={categoryStyle}>
          <h2 style={{ marginBottom: "25px", color: "#333" }}>{cat.title}</h2>
          <div style={gridStyle}>
            {cat.items.map((item, index) => (
              <div key={index} style={ingredientCardStyle}>
                <img src={item.img} alt={item.name} style={imgStyle} />
                <h3 style={{ marginTop: "10px" }}>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;
