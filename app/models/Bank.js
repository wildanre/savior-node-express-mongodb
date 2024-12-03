const mongoose = require('mongoose');

const sampahSchema = new mongoose.Schema({
  jenis_sampah: { type: String, required: true },
  harga: { type: Number, required: true },
});

const bankSchema = new mongoose.Schema({
  nama_bank_sampah: { type: String, required: true },
  lokasi: { type: String, required: true },
  sampah: [sampahSchema],  // Array of sampah objects
});

module.exports = mongoose.model('Bank', bankSchema);
