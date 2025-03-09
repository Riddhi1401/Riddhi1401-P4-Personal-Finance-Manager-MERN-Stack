const FinanceProfile = require('../models/FinanceProfile');

const saveFinanceProfile = async (req, res) => {
  try {
    const { source, income, expenses, currency } = req.body;

    if ( !source || !income || !expenses || !currency) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const financeProfile = new FinanceProfile({
      primaryIncome: source,
      incomeRange: income,
      expenseCategory: expenses,
      preferredCurrency: currency,
    });

    await financeProfile.save();
    res.status(201).json({ message: "Finance profile saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { saveFinanceProfile };
