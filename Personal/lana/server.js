const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // usually 'localhost'
  database: 'lanadb',
  password: 'nachoxdcodbo2',
  port: 5432, // the default PostgreSQL port
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Save user information in the database
app.post('/save', async (req, res) => {
  const { username, email } = req.body;
  try {
    const query = 'INSERT INTO users (username, email) VALUES ($1, $2)';
    await pool.query(query, [username, email]);
    res.status(200).json({ message: 'User information saved successfully' });
  } catch (error) {
    console.error('Error saving user information:', error);
    res.status(500).json({ message: 'Error saving user information' });
  }
});

// Fetch and display user information from the database
app.get('/users', async (req, res) => {
  try {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    const users = result.rows;
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching user information:', error);
    res.status(500).json({ message: 'Error fetching user information' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Import path module at the top of server.js
const path = require('path');

// Add this route before other routes in server.js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
