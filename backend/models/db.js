// backend/models/db.js

// Gunakan 'mysql2/promise' agar mendukung async/await
const mysql = require('mysql2/promise');

// Buat connection pool
const pool = mysql.createPool({
    host: 'localhost',
    port: 3307,         // <-- TAMBAHKAN BARIS INI
    user: 'root',
    password: '',         // Ganti dengan password MySQL Anda jika ada
    database: 'money_management',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Anda tidak perlu .connect() untuk pool, ia akan mengelola koneksi secara otomatis.
// Pesan ini hanya untuk konfirmasi di awal, bisa dihapus jika tidak perlu.
pool.getConnection()
    .then(connection => {
        console.log('Successfully connected to MySQL DB on port 3307! 🎉');
        connection.release(); // Lepaskan koneksi kembali ke pool
    })
    .catch(err => {
        console.error('Failed to connect to DB via connection pool. 😥', err);
    });

// Langsung ekspor 'pool' tersebut.
module.exports = pool;
