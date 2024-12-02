const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD Routes untuk Users
router.get('/', userController.getAllUsers); // GET semua user
router.post('/', userController.createUser); // POST buat user baru
router.get('/:id', userController.getUserById); // GET user berdasarkan ID
router.put('/:id', userController.updateUser); // PUT update user
router.delete('/:id', userController.deleteUser); // DELETE user berdasarkan ID

module.exports = router;
