const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { nama_user, email_user, password, alamat, gender, role } = req.body;

    try {
        // Cek apakah email sudah terdaftar
        const existingUser = await User.findOne({ email_user });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
  // Ganti pesan error di sini
        }

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Buat user baru
        const newUser = new User({
            nama_user,
            email_user,
            password: hashedPassword,
            alamat,
            gender,
            role,
        });

        // Simpan user baru
        await newUser.save();

        // Kirim respon sukses
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { register };
