const Pelaporan = require('../models/Pelaporan');
const User = require('../models/User');

// CREATE a new pelaporan
exports.createPelaporan = async (req, res) => {
  try {
    const { nama_user, Judul, Alamat_laporan, deskripsi, imageUrl_laporan } = req.body;
    
    // Pastikan data yang diperlukan ada
    if (!nama_user || !Judul || !Alamat_laporan || !deskripsi) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Cari user berdasarkan nama_user
    const user = await User.findOne({ nama_user });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Buat pelaporan baru
    const pelaporan = new Pelaporan({
      nama_user: user._id,  // Menggunakan _id dari User
      Judul,
      Alamat_laporan,
      deskripsi,
      imageUrl_laporan,
    });

    await pelaporan.save();
    res.status(201).json(pelaporan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all pelaporan
exports.getAllPelaporan = async (req, res) => {
  try {
    const pelaporan = await Pelaporan.find()
      .populate('nama_user', 'nama_user email_user');  // Populasi dengan nama_user dan email_user dari User
    
    res.status(200).json(pelaporan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET pelaporan by ID
exports.getPelaporanById = async (req, res) => {
  try {
    const pelaporan = await Pelaporan.findById(req.params.id)
      .populate('nama_user', 'nama_user email_user');

    if (!pelaporan) {
      return res.status(404).json({ message: 'Pelaporan not found' });
    }

    res.status(200).json(pelaporan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE pelaporan
exports.updatePelaporan = async (req, res) => {
  try {
    const { Judul, Alamat_laporan, deskripsi, imageUrl_laporan } = req.body;

    // Cari pelaporan berdasarkan ID
    const pelaporan = await Pelaporan.findById(req.params.id);
    if (!pelaporan) {
      return res.status(404).json({ message: 'Pelaporan not found' });
    }

    // Update pelaporan dengan data baru
    pelaporan.Judul = Judul || pelaporan.Judul;
    pelaporan.Alamat_laporan = Alamat_laporan || pelaporan.Alamat_laporan;
    pelaporan.deskripsi = deskripsi || pelaporan.deskripsi;
    pelaporan.imageUrl_laporan = imageUrl_laporan || pelaporan.imageUrl_laporan;

    await pelaporan.save();
    res.status(200).json(pelaporan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE pelaporan
exports.deletePelaporan = async (req, res) => {
  try {
    const pelaporan = await Pelaporan.findByIdAndDelete(req.params.id);

    if (!pelaporan) {
      return res.status(404).json({ message: 'Pelaporan not found' });
    }

    res.status(200).json({ message: 'Pelaporan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
