const express = require('express');
const router = express.Router();
const penukaranController = require('../controllers/penukaranController');

// CRUD untuk Penukaran
router.post('/', penukaranController.createPenukaran);
router.get('/', penukaranController.getAllPenukaran);
router.get('/:id', penukaranController.getPenukaranById);
router.put('/:id', penukaranController.updatePenukaran);
router.delete('/:id', penukaranController.deletePenukaran);

module.exports = router;
