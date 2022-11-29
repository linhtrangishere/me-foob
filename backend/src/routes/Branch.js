const express = require('express');
const router = express.Router();

const BranchController = require('../controllers/BranchController');

router.get('/getBranch1', BranchController.getBranch1);
router.get('/getBranch2', BranchController.getBranch2);
router.get('/', BranchController.index)

module.exports = router;