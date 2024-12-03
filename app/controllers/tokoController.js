const Toko = require('../models/Toko');
const { body, validationResult } = require('express-validator');

// Create Toko
exports.createToko = [
  // Middleware validasi
  body('nama_toko').notEmpty().withMessage('Nama toko is required'),
  body('alamat_toko').notEmpty().withMessage('Alamat toko is required'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const toko = await Toko.create(req.body);
      res.status(201).json(toko);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
];

// Get All Toko
exports.getAllToko = async (req, res) => {
  try {
    const toko = await Toko.find();
    res.status(200).json(toko);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Toko by ID
exports.getTokoById = async (req, res) => {
  try {
    const toko = await Toko.findById(req.params.id);
    if (!toko) return res.status(404).json({ message: 'Toko not found' });
    res.status(200).json(toko);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Toko
exports.updateToko = async (req, res) => {
  try {
    const toko = await Toko.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

// Add Barang to Toko
exports.addBarangToToko = async (req, res) => {
  try {
    const { nama_barang, harga_barang, stok, imageUrl_barang } = req.body;

    // Pastikan ID Toko disediakan di parameter
    const tokoId = req.params.id;

    // Tambahkan barang langsung ke array barang dalam Toko
    const toko = await Toko.findByIdAndUpdate(
      tokoId,
      {
        $push: {
          barang: { nama_barang, harga_barang, stok, imageUrl_barang },
        },
      },
      { new: true }
    );

    if (!toko) return res.status(404).json({ message: 'Toko not found' });

    res.status(200).json(toko);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove Barang from Toko
exports.removeBarangFromToko = async (req, res) => {
  try {
    const { tokoId, barangId } = req.params;

    // Hapus barang dari array barang dalam Toko
    const toko = await Toko.findByIdAndUpdate(
      tokoId,
      { $pull: { barang: { _id: barangId } } },
      { new: true }
    );

    if (!toko) return res.status(404).json({ message: 'Toko not found' });

    res.status(200).json(toko);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Barang dalam Toko
exports.updateBarangInToko = async (req, res) => {
  try {
    const { tokoId, barangId } = req.params;
    const { nama_barang, harga_barang, stok, imageUrl_barang } = req.body;

    // Cari toko berdasarkan ID
    const toko = await Toko.findById(tokoId);
    if (!toko) return res.status(404).json({ message: 'Toko not found' });

    // Cari barang berdasarkan ID dalam array barang
    const barangIndex = toko.barang.findIndex((barang) => barang._id.toString() === barangId);
    if (barangIndex === -1) return res.status(404).json({ message: 'Barang not found' });

    // Update data barang
    toko.barang[barangIndex] = {
      ...toko.barang[barangIndex],
      nama_barang,
      harga_barang,
      stok,
      imageUrl_barang,
    };

    // Simpan perubahan ke database
    await toko.save();

    res.status(200).json(toko);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
