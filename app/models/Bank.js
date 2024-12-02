const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  nama_bank_sampah: { type: String, required: true },
  lokasi: { type: String, required: true },
  sampah: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sampah' }], // Relasi ke koleksi Sampah
});

module.exports = mongoose.model('Bank', bankSchema);
