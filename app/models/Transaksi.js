const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
  nama_user: { type: String, required: true },
  total_barang: { type: Number, required: true },
  nama_barang: { type: String, required: true },
  status_transaksi: { 
    type: String, 
    enum: ['batal', 'sukses', 'menunggu'], 
    required: true 
  },
  tanggal_transaksi: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaksi', transaksiSchema);
