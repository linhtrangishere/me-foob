const express = require('express');
const router = express.Router();

const ListCoopController = require('../controllers/ListCoopController');

router.get('/getNull', ListCoopController.getNull);
router.get('/getNotNull', ListCoopController.getNotNull);

module.exports = router;