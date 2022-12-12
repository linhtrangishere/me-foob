const express = require('express');
const router = express.Router();

const CartController = require('../controllers/CartController');

router.get('/getBranch1', CartController.getBranch1);
router.get('/getBranch2', CartController.getBranch2);
router.get('/', CartController.index)

module.exports = router;