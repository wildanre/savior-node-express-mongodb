const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

// CRUD untuk Bank Sampah
router.post('/', bankController.createBank);
router.get('/', bankController.getAllBanks);
router.get('/:id', bankController.getBankById);
router.put('/:id', bankController.updateBank);
router.delete('/:id', bankController.deleteBank);
router.post('/addSampah', bankController.addSampahToBank);

// Route untuk memperbarui Bank Sampah
router.put('/:id', bankController.updateBank);

// Route untuk menghapus Bank Sampah
router.delete('/:id', bankController.deleteBank);
module.exports = router;
