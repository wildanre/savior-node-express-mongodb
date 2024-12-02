const Barang = require('../models/Barang');

// Create Barang
exports.createBarang = async (req, res) => {
  try {
    const barang = await Barang.create(req.body);
    res.status(201).json(barang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Barang
exports.getAllBarang = async (req, res) => {
  try {
    const barang = await Barang.find();
    res.status(200).json(barang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Barang by ID
exports.getBarangById = async (req, res) => {
  try {
    const barang = await Barang.findById(req.params.id);
    if (!barang) return res.status(404).json({ message: 'Barang not found' });
    res.status(200).json(barang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Barang
exports.updateBarang = async (req, res) => {
  try {
    const barang = await Barang.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!barang) return res.status(404).json({ message: 'Barang not found' });
    res.status(200).json(barang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Barang
exports.deleteBarang = async (req, res) => {
  try {
    const barang = await Barang.findByIdAndDelete(req.params.id);
    if (!barang) return res.status(404).json({ message: 'Barang not found' });
    res.status(200).json({ message: 'Barang deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
