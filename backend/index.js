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
