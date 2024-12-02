const Toko = require('../models/Toko');

// Create Toko
exports.createToko = async (req, res) => {
  try {
    const toko = await Toko.create(req.body);
    res.status(201).json(toko);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Toko
exports.getAllToko = async (req, res) => {
  try {
    const toko = await Toko.find().populate('barang');
    res.status(200).json(toko);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Toko by ID
exports.getTokoById = async (req, res) => {
  try {
    const toko = await Toko.findById(req.params.id).populate('barang');
    if (!toko) return res.status(404).json({ message: 'Toko not found' });
    res.status(200).json(toko);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Toko
exports.updateToko = async (req, res) => {
  try {
    const toko = await Toko.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('barang');
    if (!toko) return res.status(404).json({ message: 'Toko not found' });
    res.status(200).json(toko);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Toko
exports.deleteToko = async (req, res) => {
  try {
    const toko = await Toko.findByIdAndDelete(req.params.id);
    if (!toko) return res.status(404).json({ message: 'Toko not found' });
    res.status(200).json({ message: 'Toko deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
