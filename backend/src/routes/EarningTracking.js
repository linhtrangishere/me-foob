const express = require('express');
const router = express.Router();

const EarningTrackingController = require('../controllers/EarningTrackingController');

router.get('/getBranch1', EarningTrackingController.getBranch1);
router.get('/getBranch2', EarningTrackingController.getBranch2);
router.get('/', EarningTrackingController.index)

module.exports = router;