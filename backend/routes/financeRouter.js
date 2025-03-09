const express = require('express');
const { saveFinanceProfile } = require('../controllers/financeController');
const router = express.Router();

router.post('/Finance', saveFinanceProfile);

module.exports = router;
