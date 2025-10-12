const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Basic test route
app.get("/api/health", (req, res) => {
  res.json({ status: "API working" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

const pool = require("./db");

app.get("/api/events", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

