const express = require('express');
const router = express.Router();

const HomeControler = require('../controllers/HomeController');

router.get('/getBranch1', HomeControler.getBranch1);
router.get('/getBranch2', HomeControler.getBranch2);
router.get('/', HomeControler.index)

module.exports = router;