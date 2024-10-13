const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL connection

// Add Workout
router.post('/workout', (req, res) => {
  const { user_id, type, duration, calories_burned } = req.body;
  const sql = 'INSERT INTO workouts (user_id, type, duration, calories_burned) VALUES (?, ?, ?, ?)';
  db.query(sql, [user_id, type, duration, calories_burned], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding workout', error: err });
    }
    res.status(201).json({ message: 'Workout added successfully', workoutId: result.insertId });
  });
});

// Add Meal
router.post('/meal', (req, res) => {
  const { user_id, name, calories } = req.body;
  const sql = 'INSERT INTO meals (user_id, name, calories) VALUES (?, ?, ?)';
  db.query(sql, [user_id, name, calories], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding meal', error: err });
    }
    res.status(201).json({ message: 'Meal added successfully', mealId: result.insertId });
  });
});

module.exports = router;
