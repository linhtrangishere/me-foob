const express = require('express');
const router = express.Router();

const ManageCartController = require('../controllers/ManageCartController');

router.get('/getBranch1', ManageCartController.getBranch1);
router.get('/getBranch2', ManageCartController.getBranch2);
router.get('/', ManageCartController.index)

module.exports = router;