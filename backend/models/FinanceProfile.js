const mongoose = require('mongoose');

const financeProfileSchema = new mongoose.Schema({
  primaryIncome: {
    type: String,
    required: true
  },
  incomeRange: {
    type: String,
    required: true
  },
  expenseCategory: {
    type: [String], // Storing multiple expense categories
    required: true
  },
  preferredCurrency: {
    type: String,
    required: true
  }
}, { timestamps: true });

const FinanceProfile = mongoose.model('FinanceProfile', financeProfileSchema);
module.exports = FinanceProfile;
