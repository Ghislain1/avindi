// clean.js
import fs from "fs";
import path from "path";

const dir = path.resolve("dist");

// Delete folder if it exists
if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log("🗑️  Deleted existing dist folder");
} else {
    console.log("✅ No dist folder found — nothing to delete");
}
