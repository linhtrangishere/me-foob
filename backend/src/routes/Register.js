const express = require('express');
const router = express.Router();

const RegisterController = require('../controllers/RegisterController');

router.get('/getBranch1', RegisterController.getBranch1);
router.get('/getBranch2', RegisterController.getBranch2);
router.get('/', RegisterController.index)

module.exports = router;