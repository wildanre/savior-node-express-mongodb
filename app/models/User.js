const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nama_user: { type: String, required: true },
  email_user: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  alamat: { type: String },
  umur: { type: Number },
  gender: { type: String, required: true },
  nomor_hp: { type: String },
  poin: { type: Number, default: 0 },
  role: { type: String, enum: ['admin', 'user'], required: true },
});

module.exports = mongoose.model('User', userSchema);
