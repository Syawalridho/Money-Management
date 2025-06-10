// backend/routes/route.js
const express = require('express');
const router = express.Router();
// Gunakan pool.promise() untuk async/await
const db = require('../models/db'); 

// PENTING: Untuk sekarang, kita tetap simpan password sebagai teks biasa
// sesuai permintaan Anda untuk fokus pada alur.

// Endpoint Registrasi Pengguna Baru
router.post('/register', async (req, res) => {
    console.log('Menerima permintaan ke /api/register');
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, Email, dan Password wajib diisi' });
    }

    try {
        // Cek apakah username atau email sudah ada
        const [existingUsers] = await db.query(
            "SELECT * FROM users WHERE username = ? OR email = ?",
            [username, email]
        );

        if (existingUsers.length > 0) {
            return res.status(409).json({ message: 'Username atau Email sudah terdaftar.' }); // 409 Conflict
        }

        // Simpan pengguna baru dengan password teks biasa (TIDAK AMAN)
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        const [result] = await db.query(sql, [username, email, password]);
        
        res.status(201).json({ success: true, message: 'Registrasi berhasil', userId: result.insertId });
    } catch (err) {
        console.error("Error saat registrasi:", err);
        return res.status(500).json({ message: 'Terjadi kesalahan saat registrasi' });
    }
});


// Endpoint Login
router.post('/login', async (req, res) => {
    console.log('Menerima permintaan ke /api/login');
    const { identifier, password } = req.body;

    if (!identifier || !password) {
        return res.status(400).json({ message: 'Identifier (Username/Email) dan password harus diisi.' });
    }

    try {
        const query = "SELECT * FROM users WHERE (email = ? OR username = ?) AND password = ?";
        const [results] = await db.query(query, [identifier, identifier, password]);

        if (results.length > 0) {
            const user = results[0];
            const { password: userPassword, ...userData } = user;
            res.json({ success: true, user: userData, message: 'Login berhasil!' });
        } else {
            res.json({ success: false, message: 'Kredensial tidak valid.' });
        }
    } catch (err) {
        console.error("Query error saat login:", err);
        return res.status(500).json({ message: 'Terjadi kesalahan pada server saat query.' });
    }
});

module.exports = router;
