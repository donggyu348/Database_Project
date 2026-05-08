const transactionsService = require('../service/transactionsService');

async function getAll(req, res) {
  try {
    const rows = await transactionsService.listTransactions();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const { date, desc, category, type, amount } = req.body || {};
    const result = await transactionsService.createTransaction({ date, desc, category, type, amount });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    const result = await transactionsService.deleteTransaction(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getAll,
  create,
  remove,
};
