const express = require('express');
const router = express.Router();

const ManageCoopController = require('../controllers/ManageCoopController');

router.get('/get1', ManageCoopController.get1)
router.get('/get2', ManageCoopController.get2)
router.get('/get3', ManageCoopController.get3)
router.get('/get4', ManageCoopController.get4)
router.get('/get5', ManageCoopController.get5)
router.get('/get6', ManageCoopController.get6)

module.exports = router;