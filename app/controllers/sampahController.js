const Sampah = require('../models/Sampah');

// Create Sampah
exports.createSampah = async (req, res) => {
  try {
    const sampah = await Sampah.create(req.body);
    res.status(201).json(sampah);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Sampah
exports.getAllSampah = async (req, res) => {
  try {
    const sampah = await Sampah.find();
    res.status(200).json(sampah);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Sampah by ID
exports.getSampahById = async (req, res) => {
  try {
    const sampah = await Sampah.findById(req.params.id);
    if (!sampah) return res.status(404).json({ message: 'Sampah not found' });
    res.status(200).json(sampah);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Sampah
exports.updateSampah = async (req, res) => {
  try {
    const sampah = await Sampah.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sampah) return res.status(404).json({ message: 'Sampah not found' });
    res.status(200).json(sampah);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Sampah
exports.deleteSampah = async (req, res) => {
  try {
    const sampah = await Sampah.findByIdAndDelete(req.params.id);
    if (!sampah) return res.status(404).json({ message: 'Sampah not found' });
    res.status(200).json({ message: 'Sampah deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
