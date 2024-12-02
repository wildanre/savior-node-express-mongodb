const mongoose = require('mongoose');

const penukaranSchema = new mongoose.Schema({
  nama_user: { type: String, ref: 'User', required: true },
  jenis_sampah: { type: String, ref: 'Sampah',required: true },
  total_barang: { type: Number, required: true },
  pendapatan: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'sukses', 'batal'], required: true },
  tanggal_penukaran: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Penukaran', penukaranSchema);
