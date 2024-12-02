const mongoose = require('mongoose');

const tokoSchema = new mongoose.Schema({
  nama_toko: { type: String, required: true },
  alamat_toko: { type: String, required: true },
  imageUrl_toko: { type: String },
  barang: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Barang' }],
});

module.exports = mongoose.model('Toko', tokoSchema);
