const mongoose = require('mongoose');

// Skema Toko
const tokoSchema = new mongoose.Schema({
  nama_toko: { type: String, required: true },
  alamat_toko: { type: String, required: true },
  imageUrl_toko: { type: String, default: '' }, // Tambahkan default
  barang: [
    {
      nama_barang: { type: String, required: true },
      harga_barang: { type: Number, required: true },
      stok: { type: Number, required: true },
      imageUrl_barang: { type: String, default: '' },
    },
  ],
});

// Export Model Toko
module.exports = mongoose.model('Toko', tokoSchema);
