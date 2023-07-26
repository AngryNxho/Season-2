// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database_name', // Use the name of your existing database
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
