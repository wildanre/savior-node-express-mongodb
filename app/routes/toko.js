const express = require('express');
const router = express.Router();
const tokoController = require('../controllers/tokoController');

// CRUD untuk Toko
router.post('/', tokoController.createToko); // Create toko
router.get('/', tokoController.getAllToko); // Get all toko
router.get('/:id', tokoController.getTokoById); // Get toko by ID
router.put('/:id', tokoController.updateToko); // Update toko
router.delete('/:id', tokoController.deleteToko); // Delete toko

// Barang Management di dalam Toko
router.post('/:id/barang', tokoController.addBarangToToko);
// Update Barang dalam Toko
router.put('/:id/barang/:barangId', tokoController.updateBarangInToko); 
// Menghapus barang dari toko (menghapus barang dari array barang dalam Toko)
router.delete('/:id/barang/:barangId', tokoController.removeBarangFromToko);

module.exports = router;
