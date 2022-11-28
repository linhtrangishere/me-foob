const express = require('express');
const router = express.Router();

const siteControler = require('../controllers/SiteController');

router.get('/getBranch1', siteControler.getBranch1);
router.get('/getBranch2', siteControler.getBranch2);
router.get('/', siteControler.index)

module.exports = router;