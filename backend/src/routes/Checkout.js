const express = require('express');
const router = express.Router();

const CheckoutController = require('../controllers/CheckoutController');

router.get('/getBranch1', CheckoutController.getBranch1);
router.get('/getBranch2', CheckoutController.getBranch2);
router.get('/', CheckoutController.index)

module.exports = router;