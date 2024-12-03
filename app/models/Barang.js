const mongoose = require('mongoose');

// Skema Barang
const barangSchema = new mongoose.Schema({
  nama_barang: { type: String, required: true },
  harga_barang: { type: Number, required: true },
  stok: { type: Number, required: true },
  imageUrl_barang: { type: String, default: '' }, // Tambahkan default
});

// Export Model Barang
module.exports = mongoose.model('Barang', barangSchema);
