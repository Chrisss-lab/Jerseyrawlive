import express from "express";
import { google } from "googleapis";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// ------------------------
// Google Sheets info
// ------------------------
const SPREADSHEET_ID = "1oSyu-xaWxzfiOB4X-gYu9DiGu3Lj4f-cqT2xBt3mPs0";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

const sheets = google.sheets({ version: "v4", auth });

// ------------------------
// API routes
// ------------------------

// GET all recipes
app.get("/api/recipes", async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Recipes!A2:Y"
    });

    const rows = response.data.values || [];
    const recipes = rows.map(row => ({
      description: row[0] || "",
      price: row[1] || "",
      Name: row[2] || "",
      Ingredients: row.slice(3, 27).filter(Boolean)
    }));

    res.json(recipes);
  } catch (err) {
    console.error("Error fetching Recipes sheet:", err);
    res.status(500).send("Error fetching Recipes sheet");
  }
});

// GET packaging options
app.get("/api/packages", async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Packages!A2:C"
    });

    const rows = response.data.values || [];
    const packages = rows.map(row => ({
      Type: row[0] || "",
      Size: row[1] || "",
      Discount: row[2] || "0%"
    }));

    res.json(packages);
  } catch (err) {
    console.error("Error fetching Packages sheet:", err);
    res.status(500).send("Error fetching Packages sheet");
  }
});

// POST new order
app.post("/api/order", async (req, res) => {
  try {
    const { phone, name, email, address, recipe, pounds, packaging, coupon, total } = req.body;

    const newRow = [
      new Date().toLocaleDateString(),
      phone || "",
      name || "",
      email || "",
      address || "",
      recipe || "",
      pounds || "",
      packaging || "",
      coupon || "",
      total || ""
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Orders!A2:J",
      valueInputOption: "USER_ENTERED",
      resource: { values: [newRow] },
    });

    res.status(200).json({ message: "Order added successfully!" });
  } catch (err) {
    console.error("Error adding order:", err);
    res.status(500).json({ message: "Failed to add order" });
  }
});

// ------------------------
// Serve React frontend
// ------------------------
// Make sure Render is serving from the correct build folder
const buildPath = path.resolve("build");
app.use(express.static(buildPath));

// All unknown routes should serve index.html (for React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ------------------------
// Start server
// ------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
