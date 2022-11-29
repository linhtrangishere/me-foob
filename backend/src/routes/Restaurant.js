const express = require('express');
const router = express.Router();

const RestaurantController = require('../controllers/RestaurantController');

router.get('/getBranch1', RestaurantController.getBranch1);
router.get('/getBranch2', RestaurantController.getBranch2);
router.get('/', RestaurantController.index)

module.exports = router;