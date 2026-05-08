const express = require('express');
const transactionsController = require('../controller/transactionsController');

const router = express.Router();

router.get('/transactions', transactionsController.getAll);
router.post('/transactions', transactionsController.create);
router.delete('/transactions/:id', transactionsController.remove);

module.exports = router;
