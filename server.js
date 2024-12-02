const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./app/config/db.config');
require('dotenv').config();
const cors = require('cors');  // Import cors

const app = express();

// Use CORS middleware to allow all origins
app.use(cors());  // Allow all origins

app.use(express.json());

// Routes
app.use('/users', require('./app/routes/users'));
app.use('/login', require('./app/routes/login'));
app.use('/register', require('./app/routes/register'));
app.use('/bank', require('./app/routes/bank'));
app.use('/toko', require('./app/routes/toko'));
app.use('/barang', require('./app/routes/barang'))
app.use('/sampah', require('./app/routes/sampah'))
app.use('/penukaran', require('./app/routes/penukaran'))
app.use('/transaksi', require('./app/routes/transaksi'))
app.use('/pelaporan', require('./app/routes/pelaporan'))

// A simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

mongoose.set('strictQuery', true);

// MongoDB connection
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
