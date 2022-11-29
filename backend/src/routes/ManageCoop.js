const express = require('express');
const router = express.Router();

const ManageCoopController = require('../controllers/ManageCoopController');

router.get('/getBranch1', ManageCoopController.getBranch1);
router.get('/getBranch2', ManageCoopController.getBranch2);
router.get('/', ManageCoopController.index)

module.exports = router;