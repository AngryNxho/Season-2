// server.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Replace with your actual database credentials
const dbConfig = {
  user: 'your_postgres_user',
  password: 'your_postgres_password',
  host: 'your_postgres_host',
  port: 5432, // Default PostgreSQL port
  database: 'your_database_name',
};

const pool = new Pool(dbConfig);

app.use(express.json());

app.post('/addData', (req, res) => {
  const value = req.body.value;

  // Replace 'your_table_name' with the actual name of your table
  const insertQuery = 'INSERT INTO your_table_name (column_name) VALUES ($1)';

  pool.query(insertQuery, [value])
    .then(() => {
      console.log('Data inserted successfully!');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
