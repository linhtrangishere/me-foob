const express = require('express');
const router = express.Router();

const RestaurantController = require('../controllers/RestaurantController');

router.get('/getMenu/:slug',RestaurantController.getMenu);
router.get('/getName/:slug',RestaurantController.getName);
router.get('/getMenu/:slug',RestaurantController.getMenu);
module.exports = router;