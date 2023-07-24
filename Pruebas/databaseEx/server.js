// server.js
const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// PostgreSQL configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "nachoxdcodbo2",
  port: 5432,
});

app.use(express.json());

// Route to get all users
app.get("/api/users", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Route to add a new user
app.post("/api/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [
      name,
      email,
    ]);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
