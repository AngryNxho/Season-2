// server.js

const express = require('express');
const app = express();
const pool = require('./db'); // Import the database connection

// Define a route to handle database connection explanation
app.get('/connection', (req, res) => {
  res.send('This is how you can connect to a PostgreSQL database using Node.js.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
