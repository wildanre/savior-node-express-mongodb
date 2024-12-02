const Penukaran = require('../models/Penukaran');

// Create Penukaran
exports.createPenukaran = async (req, res) => {
  try {
    const penukaran = await Penukaran.create(req.body);
    res.status(201).json(penukaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Penukaran
exports.getAllPenukaran = async (req, res) => {
  try {
    const penukaran = await Penukaran.find().populate('jenis_sampah nama_user');
    res.status(200).json(penukaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Penukaran by ID
exports.getPenukaranById = async (req, res) => {
  try {
    const penukaran = await Penukaran.findById(req.params.id).populate('jenis_sampah nama_user');
    if (!penukaran) return res.status(404).json({ message: 'Penukaran not found' });
    res.status(200).json(penukaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Penukaran
exports.updatePenukaran = async (req, res) => {
  try {
    const penukaran = await Penukaran.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!penukaran) return res.status(404).json({ message: 'Penukaran not found' });
    res.status(200).json(penukaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Penukaran
exports.deletePenukaran = async (req, res) => {
  try {
    const penukaran = await Penukaran.findByIdAndDelete(req.params.id);
    if (!penukaran) return res.status(404).json({ message: 'Penukaran not found' });
    res.status(200).json({ message: 'Penukaran deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
