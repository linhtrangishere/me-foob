const express = require('express');
const router = express.Router();

const CartControler = require('../controllers/CartController');

router.get('/getBranch1', CartControler.getBranch1);
router.get('/getBranch2', CartControler.getBranch2);
router.get('/', CartControler.index)

module.exports = router;