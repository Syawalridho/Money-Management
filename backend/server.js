const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const authRoutes = require('./routes/route');


const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',     // ganti sesuai password MySQL kamu
  database: 'money_management'
});

db.connect(err => {
  if (err) {
      console.error('Error connecting to MySQL DB:', err);
      return;
    }
    console.log('Connected to MySQL DB!');
});

// API login
app.post('/login', (req, res) => {
  const { identifier, password } = req.body;
  if (!identifier || !password) {
        return res.status(400).json({ message: 'Identifier (Username/Email) dan password harus diisi.' });
    }
  const query = "SELECT * FROM users WHERE (email = ? OR username = ?) AND password = ?";
  db.query(query, [identifier, identifier, password], (err, results) => {
      if (err) {
          console.error("Query error:", err);
          return res.status(500).json({ message: 'Terjadi kesalahan pada server saat query.' });
      }

      if (results.length > 0) {
        const user = results[0];
        const { password: userPassword, ...userData } = user;
        
        console.log('Login berhasil untuk identifier:', identifier);
        res.json({ success: true, user: userData });
      } 
      else {
        console.log('Kredensial tidak valid untuk identifier:', identifier);
        res.json({ success: false, message: 'Kredensial tidak valid.' });
      }
  });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
