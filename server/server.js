const express = require('express');
const app = express();
const path = require('path');
const { Pool } = require('pg');

// Connect to ElephantSQL database
const connectionString = 'postgres://bfhnryrl:RJPG8wjo6uwrd6zT-ieAyPzrkM-VLGUq@mahmud.db.elephantsql.com/bfhnryrl';

const pool = new Pool({
  connectionString
});

// Body parser middleware
app.use(express.json());


app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Return all users to test connection
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// Add a new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  pool.query('INSERT INTO users (name) VALUES ($1)', [name], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`User added with ID: ${results.insertId}`);
  });
});



app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
}); 
