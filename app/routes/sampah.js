const express = require('express');
const router = express.Router();
const sampahController = require('../controllers/sampahController');

// CRUD untuk Sampah
router.post('/', sampahController.createSampah);
router.get('/', sampahController.getAllSampah);
router.get('/:id', sampahController.getSampahById);
router.put('/:id', sampahController.updateSampah);
router.delete('/:id', sampahController.deleteSampah);

module.exports = router;
