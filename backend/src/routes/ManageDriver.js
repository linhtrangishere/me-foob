const express = require('express');
const router = express.Router();

const ManageDriverController = require('../controllers/ManageDriverController');

router.get('/getBranch1', ManageDriverController.getBranch1);
router.get('/getBranch2', ManageDriverController.getBranch2);
router.get('/', ManageDriverController.index)

module.exports = router;