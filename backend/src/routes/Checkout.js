const express = require('express');
const router = express.Router();

const CheckoutControler = require('../controllers/CheckoutController');

router.get('/getBranch1', CheckoutControler.getBranch1);
router.get('/getBranch2', CheckoutControler.getBranch2);
router.get('/', CheckoutControler.index)

module.exports = router;