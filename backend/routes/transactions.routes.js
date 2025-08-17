const express = require('express');
const router = express.Router();
const db = require('../models/db'); // pool mysql2/promise

// CREATE transaksi
router.post('/', async (req, res) => {
  try {
    const { type, account, category, amount, occurred_at, label, user_id } = req.body;

    if (!type || !account || !category || !amount || !occurred_at) {
      return res.status(400).json({ message: 'type, account, category, amount, occurred_at wajib diisi' });
    }

    const [result] = await db.query(
      `INSERT INTO transactions (user_id, type, account, category, amount, occurred_at, label)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [user_id || null, type, account, category, amount, occurred_at, label || null]
    );

    const [rows] = await db.query(`SELECT * FROM transactions WHERE id = ?`, [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (e) {
    console.error('POST /transactions error', e);
    res.status(500).json({ message: 'Gagal membuat transaksi' });
  }
});

// LIST transaksi sederhana (beri filter dasar nanti)
router.get('/', async (req, res) => {
  try {
    // TODO: tambahkan filter user_id, date range, search, pagination
    const [rows] = await db.query(
      `SELECT * FROM transactions ORDER BY occurred_at DESC, id DESC LIMIT 200`
    );
    res.json(rows);
  } catch (e) {
    console.error('GET /transactions error', e);
    res.status(500).json({ message: 'Gagal mengambil transaksi' });
  }
});

// (opsional) DELETE
router.delete('/:id', async (req, res) => {
  try {
    const [r] = await db.query(`DELETE FROM transactions WHERE id = ?`, [req.params.id]);
    if (r.affectedRows === 0) return res.status(404).json({ message: 'Tidak ditemukan' });
    res.status(204).send();
  } catch (e) {
    console.error('DELETE /transactions error', e);
    res.status(500).json({ message: 'Gagal menghapus' });
  }
});

// (opsional) UPDATE
router.patch('/:id', async (req, res) => {
  try {
    const fields = ['type','account','category','amount','occurred_at','label'];
    const sets = [];
    const values = [];
    for (const f of fields) {
      if (f in req.body) { sets.push(`${f} = ?`); values.push(req.body[f]); }
    }
    if (!sets.length) return res.status(400).json({ message: 'Tidak ada perubahan' });

    values.push(req.params.id);
    await db.query(`UPDATE transactions SET ${sets.join(', ')} WHERE id = ?`, values);

    const [rows] = await db.query(`SELECT * FROM transactions WHERE id = ?`, [req.params.id]);
    res.json(rows[0]);
  } catch (e) {
    console.error('PATCH /transactions error', e);
    res.status(500).json({ message: 'Gagal mengubah transaksi' });
  }
});

module.exports = router;
