const express = require('express');
const router = express.Router();

const FollowOrderController = require('../controllers/FollowOrderController');

router.get('/getBranch1', FollowOrderController.getBranch1);
router.get('/getBranch2', FollowOrderController.getBranch2);
router.get('/', FollowOrderController.index)

module.exports = router;