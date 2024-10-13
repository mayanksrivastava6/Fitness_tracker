const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL connection

// Register User
router.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
  db.query(sql, [username, password, email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating user', error: err });
    }
    res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
  });
});

// Login User (simplified, should include password validation)
router.post('/login', (req, res) => {
  // Implement login logic here
});

module.exports = router;
