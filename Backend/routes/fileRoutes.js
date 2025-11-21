// routes/fileRoutes.js
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Resolve paths relative to the backend directory (ESM compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendDir = path.resolve(__dirname, "..");
const projectRoot = path.resolve(backendDir, "..");

// This should match your React app folder name
const shopSrcDir = path.join(projectRoot, "shopping-app", "src");

function listFilesRecursive(dir, extensions) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...listFilesRecursive(full, extensions));
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(full);
      }
    }
  }

  return results;
}

// GET /api/files/jsx -> list all .jsx and .tsx files under shopping-app/src
router.get("/jsx", (req, res) => {
  try {
    if (!fs.existsSync(shopSrcDir)) {
      return res.status(404).json({ error: "shopping-app/src directory not found" });
    }

    const files = listFilesRecursive(shopSrcDir, [".jsx", ".tsx"]).map((abs) =>
      path.relative(shopSrcDir, abs).replace(/\\/g, "/")
    );

    return res.json({ base: "shopping-app/src", count: files.length, files });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// GET /api/files/content?file=relativePath -> return content of a given JSX/TSX file
router.get("/content", (req, res) => {
  try {
    const rel = req.query.file;

    if (!rel || typeof rel !== "string") {
      return res
        .status(400)
        .json({ error: "Query parameter 'file' is required" });
    }

    const requestedPath = path.normalize(rel).replace(/^\/+/, "");
    const absPath = path.resolve(shopSrcDir, requestedPath);

    if (!absPath.startsWith(shopSrcDir)) {
      return res.status(400).json({ error: "Invalid file path" });
    }

    if (!fs.existsSync(absPath)) {
      return res.status(404).json({ error: "File not found" });
    }

    const ext = path.extname(absPath).toLowerCase();
    if (![".jsx", ".tsx"].includes(ext)) {
      return res.status(400).json({ error: "Only .jsx/.tsx files are allowed" });
    }

    const content = fs.readFileSync(absPath, "utf8");
    return res.type("text/plain").send(content);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
