const express = require('express');
const router = express.Router();

const EarningTrackingController = require('../controllers/EarningTrackingController');

router.get('/getThuNhap', EarningTrackingController.getThuNhap);
router.get('/getThongKe', EarningTrackingController.getThongKe);
router.get('/', EarningTrackingController.index)

module.exports = router;