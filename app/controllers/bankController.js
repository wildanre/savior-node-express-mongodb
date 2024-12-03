const Bank = require('../models/Bank');

// Create Bank Sampah
exports.createBank = async (req, res) => {
  try {
    const bank = await Bank.create(req.body);
    res.status(201).json(bank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Bank Sampah
exports.getAllBanks = async (req, res) => {
  try {
    const banks = await Bank.find();
    res.status(200).json(banks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Bank Sampah by ID
exports.getBankById = async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id);
    if (!bank) return res.status(404).json({ message: 'Bank not found' });
    res.status(200).json(bank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Sampah to Bank Sampah
exports.addSampahToBank = async (req, res) => {
  try {
    const { bankId, jenis_sampah, harga } = req.body;

    // Validasi apakah Bank ada
    const bank = await Bank.findById(bankId);
    if (!bank) {
      return res.status(404).json({ message: 'Bank not found' });
    }

    // Menambahkan Sampah ke dalam Bank Sampah
    bank.sampah.push({ jenis_sampah, harga });
    await bank.save();

    res.status(200).json({ message: 'Sampah added to Bank Sampah successfully', bank });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Bank Sampah
exports.updateBank = async (req, res) => {
  try {
    const bank = await Bank.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bank) return res.status(404).json({ message: 'Bank not found' });
    res.status(200).json(bank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Bank Sampah
exports.deleteBank = async (req, res) => {
  try {
    const bank = await Bank.findByIdAndDelete(req.params.id);
    if (!bank) return res.status(404).json({ message: 'Bank not found' });
    res.status(200).json({ message: 'Bank deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
