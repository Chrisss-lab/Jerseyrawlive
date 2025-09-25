import fs from "fs";
import path from "path";

const filesToUpdate = [
  "src/apiServer.js",
  "src/Order.js",
  "src/FetchRecipes.js"
];

filesToUpdate.forEach((file) => {
  const filePath = path.resolve(file); // fixed: removed "live-website" prefix
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf8");

  if (file.endsWith("apiServer.js")) {
    content = content.replace(
      /keyFile:\s*["'].*service-account\.json["']/,
      "credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)"
    );
  } else {
    // Example: update fetch URLs in frontend files
    content = content.replace(
      /fetch\(["']http:\/\/localhost:5000(\/api\/.*?)["']/g,
      'fetch(`${process.env.REACT_APP_API_URL || ""}$1`'
    );
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Updated ${file}`);
});

console.log("✅ All files updated to use environment variables.");
