const express = require('express');
const router = express.Router();
const tokoController = require('../controllers/tokoController');

// CRUD untuk Toko
router.post('/', tokoController.createToko);
router.get('/', tokoController.getAllToko);
router.get('/:id', tokoController.getTokoById);
router.put('/:id', tokoController.updateToko);
router.delete('/:id', tokoController.deleteToko);

module.exports = router;
