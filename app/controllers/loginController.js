const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Assuming you're using bcrypt for password hashing
const User = require('../models/User'); // Assuming you have a User model

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // Assuming request body contains email and password

    // Find user by email
    const user = await User.findOne({ email_user: email });

    if (!user) {
      return res.status(401).json({ error: 'pengguna tidak ditemukan' });
    }


    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      // If password is incorrect, send generic error
      return res.status(401).json({ error: 'Password salah' });
    }

    // Create JWT token
    const payload = {
      id: user._id,
      email_user: user.email_user,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

    // Send the token in response (don't send sensitive data like password)
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email_user: user.email_user,
        nama_user: user.nama_user, // Send only necessary user info
      }
    });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(400).json({ error: 'Failed to login' });
  }
};
