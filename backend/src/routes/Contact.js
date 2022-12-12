const express = require('express');
const router = express.Router();

const ContactController = require('../controllers/ContactController');

router.get('/getDatelineFix/:slug', ContactController.getDatelineFix);
router.post('/updateDateline/:slug', ContactController.updateDateline);
router.get('/getDateline/:slug', ContactController.getDateline);
router.get('/getBranch/:slug', ContactController.getBranch);
router.get('/', ContactController.index)

module.exports = router;