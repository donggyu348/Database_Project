const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// 거래 내역 전체 조회
app.get('/api/transactions', (req, res) => {
  db.query('SELECT * FROM transactions ORDER BY date DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 거래 내역 추가
app.post('/api/transactions', (req, res) => {
  const { date, desc, category, type, amount } = req.body;
  db.query(
    'INSERT INTO transactions (date, description, category, type, amount) VALUES (?, ?, ?, ?, ?)',
    [date, desc, category, type, amount],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId });
    }
  );
});

// 거래 내역 삭제
app.delete('/api/transactions/:id', (req, res) => {
  db.query('DELETE FROM transactions WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
