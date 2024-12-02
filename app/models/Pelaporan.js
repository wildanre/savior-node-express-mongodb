const mongoose = require('mongoose');

const pelaporanSchema = new mongoose.Schema({
  nama_user: { type: String, required: true },
  judul: { type: String, required: true },
  alamat_laporan: { type: String, required: true },
  deskripsi: { type: String, required: true },
  imageUrl_laporan: { type: String },
});

module.exports = mongoose.model('Pelaporan', pelaporanSchema);
