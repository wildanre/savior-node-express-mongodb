const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController'); // Import controller registrasi

// Route untuk registrasi
router.post('/', registerController.register);

module.exports = router;
