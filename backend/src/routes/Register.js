const express = require('express');
const router = express.Router();

const RegisterControler = require('../controllers/RegisterController');

router.get('/getBranch1', RegisterControler.getBranch1);
router.get('/getBranch2', RegisterControler.getBranch2);
router.get('/', RegisterControler.index)

module.exports = router;