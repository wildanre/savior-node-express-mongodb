const express = require('express');
const router = express.Router();
const pelaporanController = require('../controllers/pelaporanController');

// CRUD untuk Pelaporan
router.post('/', pelaporanController.createPelaporan);
router.get('/', pelaporanController.getAllPelaporan);
router.get('/:id', pelaporanController.getPelaporanById);
router.put('/:id', pelaporanController.updatePelaporan);
router.delete('/:id', pelaporanController.deletePelaporan);

module.exports = router;
