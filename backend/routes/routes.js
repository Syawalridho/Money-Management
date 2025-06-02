const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Register user
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Semua field wajib diisi' });
  }

  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error("Error saat registrasi:", err);
      return res.status(500).json({ message: 'Terjadi kesalahan saat registrasi' });
    }
    res.status(201).json({ message: 'Registrasi berhasil' });
  });
});

module.exports = router;
