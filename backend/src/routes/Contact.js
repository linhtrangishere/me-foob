const express = require('express');
const router = express.Router();

const ContactControler = require('../controllers/ContactController');

router.get('/getBranch1', ContactControler.getBranch1);
router.get('/getBranch2', ContactControler.getBranch2);
router.get('/', ContactControler.index)

module.exports = router;