// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'lanasaves', // Use the name of your existing database
  password: 'nachoxdcodbo2',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
