const express = require('express');
const router = express.Router();

const ContactControler = require('../controllers/ContactController');

router.get('/getDatelineFix/:slug', ContactControler.getDatelineFix);
router.get('/updateDateline/:slug', ContactControler.updateDateline);
router.get('/getDateline/:slug', ContactControler.getDateline);
router.get('/getBranch/:slug', ContactControler.getBranch);
router.get('/', ContactControler.index)

module.exports = router;