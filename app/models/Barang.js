const mongoose = require('mongoose');

const barangSchema = new mongoose.Schema({
  nama_barang: { type: String, required: true },
  harga_barang: { type: Number, required: true },
  stok: { type: Number, required: true },
  imageUrl_barang: { type: String },
});

module.exports = mongoose.model('Barang', barangSchema);
