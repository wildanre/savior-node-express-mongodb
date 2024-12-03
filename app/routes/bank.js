const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

// CRUD untuk Bank Sampah
router.post('/', bankController.createBank);
router.get('/', bankController.getAllBanks);
router.get('/:id', bankController.getBankById);
router.put('/:id', bankController.updateBank);
router.delete('/:id', bankController.deleteBank);

// Route untuk menambahkan Sampah ke Bank Sampah
router.post('/addSampah', bankController.addSampahToBank);

module.exports = router;
