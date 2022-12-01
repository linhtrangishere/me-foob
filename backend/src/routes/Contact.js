const express = require('express');
const router = express.Router();

const ContactControler = require('../controllers/ContactController');

router.get('/getBranch/:slug', ContactControler.getBranch);
router.get('/', ContactControler.index)

module.exports = router;