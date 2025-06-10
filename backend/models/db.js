// backend/models/db.js

// Gunakan 'mysql2/promise' agar mendukung async/await
const mysql = require('mysql2/promise');

// Buat connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',         // <-- Pastikan 'root' ada di sini
    password: '',         // <-- Ganti dengan password MySQL Anda jika ada
    database: 'money_management',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Langsung ekspor 'pool' tersebut.
module.exports = pool;