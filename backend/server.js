// backend/server.js - Contoh yang Benar
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/route');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes); // Mengarahkan semua permintaan /api ke route.js

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});