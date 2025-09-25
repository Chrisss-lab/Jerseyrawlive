import React, { useEffect, useState } from "react";

function FetchRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this fetch with your backend API if needed
    fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading recipes...</p>;

  return (
    <section
      style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#333" }}
      aria-labelledby="recipes-heading"
    >
      <h2
        id="recipes-heading"
        style={{ textAlign: "center", marginBottom: "40px", color: "#2b6e44" }}
      >
        🐾 Our Fresh Raw Dog Food Recipes
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "25px",
        }}
      >
        {recipes.map((recipe, index) => (
          <article
            key={index}
            itemScope
            itemType="https://schema.org/Recipe"
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "25px",
              backgroundColor: "#ffffff",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3
              itemProp="name"
              style={{ margin: "0 0 10px", color: "#2b6e44", fontSize: "1.4rem" }}
            >
              {recipe.Name || "Untitled Recipe"}
            </h3>

            {recipe.description && (
              <p
                itemProp="description"
                style={{
                  margin: "0 0 15px",
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: "1.4",
                }}
              >
                {recipe.description}
              </p>
            )}

            <div
              style={{
                backgroundColor: "#2b6e44",
                color: "white",
                display: "inline-block",
                padding: "5px 12px",
                borderRadius: "20px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="USD" />
                <span itemProp="price">${Number(recipe.price || 0).toFixed(2)}</span> / lb
              </span>
            </div>

            <h4
              style={{ margin: "15px 0 8px", fontSize: "1rem", fontWeight: "600", color: "#444" }}
            >
              Ingredients:
            </h4>
            <p
              itemProp="recipeIngredient"
              style={{ fontSize: "0.85rem", lineHeight: "1.4", color: "#333", margin: 0 }}
            >
              {(recipe.Ingredients || []).join(", ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FetchRecipes;
