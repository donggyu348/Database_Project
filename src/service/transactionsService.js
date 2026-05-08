const db = require('../config/db');

function listTransactions() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM transactions ORDER BY date DESC', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function createTransaction({ date, desc, category, type, amount }) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO transactions (date, description, category, type, amount) VALUES (?, ?, ?, ?, ?)',
      [date, desc, category, type, amount],
      (err, result) => {
        if (err) return reject(err);
        resolve({ id: result.insertId });
      },
    );
  });
}

function deleteTransaction(id) {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM transactions WHERE id = ?', [id], (err) => {
      if (err) return reject(err);
      resolve({ success: true });
    });
  });
}

module.exports = {
  listTransactions,
  createTransaction,
  deleteTransaction,
};
