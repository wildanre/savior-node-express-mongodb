const mongoose = require('mongoose');

const sampahSchema = new mongoose.Schema({
  jenis_sampah: { type: String, required: true },
  harga: { type: Number, required: true },
});

module.exports = mongoose.model('Sampah', sampahSchema);
