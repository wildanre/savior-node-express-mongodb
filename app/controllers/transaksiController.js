const Transaksi = require('../models/Transaksi');
const User = require('../models/User');
const Barang = require('../models/Barang');

// CREATE a new transaksi
exports.createTransaksi = async (req, res) => {
  try {
    const { nama_user, total_barang, nama_barang, status_transaksi } = req.body;
    
    // Pastikan data yang diperlukan ada
    if (!nama_user || !total_barang || !nama_barang || !status_transaksi) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Cari user berdasarkan nama_user
    const user = await User.findOne({ nama_user });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Cari barang berdasarkan nama_barang
    const barang = await Barang.findOne({ nama_barang });
    if (!barang) {
      return res.status(404).json({ message: 'Barang not found' });
    }

    // Buat transaksi baru
    const transaksi = new Transaksi({
      nama_user: user._id,  // Menggunakan _id dari User
      total_barang,
      nama_barang: barang._id,  // Menggunakan _id dari Barang
      status_transaksi,
    });

    await transaksi.save();
    res.status(201).json(transaksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all transaksi
exports.getAllTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.find()
      .populate('nama_user', 'nama_user email_user')  // Populasi dengan nama_user dan email_user dari User
      .populate('nama_barang', 'nama_barang harga_barang');  // Populasi dengan nama_barang dan harga_barang dari Barang
    
    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET transaksi by ID
exports.getTransaksiById = async (req, res) => {
  try {
    const transaksi = await Transaksi.findById(req.params.id)
      .populate('nama_user', 'nama_user email_user')
      .populate('nama_barang', 'nama_barang harga_barang');

    if (!transaksi) {
      return res.status(404).json({ message: 'Transaksi not found' });
    }

    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE transaksi
exports.updateTransaksi = async (req, res) => {
  try {
    const { status_transaksi } = req.body;

    // Pastikan status transaksi valid
    if (!status_transaksi || !['batal', 'sukses', 'menunggu'].includes(status_transaksi)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const transaksi = await Transaksi.findByIdAndUpdate(
      req.params.id,
      { status_transaksi },
      { new: true }
    );

    if (!transaksi) {
      return res.status(404).json({ message: 'Transaksi not found' });
    }

    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE transaksi
exports.deleteTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findByIdAndDelete(req.params.id);

    if (!transaksi) {
      return res.status(404).json({ message: 'Transaksi not found' });
    }

    res.status(200).json({ message: 'Transaksi deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
