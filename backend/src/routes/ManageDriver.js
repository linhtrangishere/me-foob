const express = require('express');
const router = express.Router();

const ManageDriverController = require('../controllers/ManageDriverController');

router.get('/getDetail', ManageDriverController.getDetail);
router.get('/', ManageDriverController.index)

module.exports = router;