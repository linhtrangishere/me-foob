const express = require('express');
const router = express.Router();

const BranchController = require('../controllers/BranchController');

router.get('/getBranch/:slug', BranchController.getBranch);
router.get('/getMenu/:slug', BranchController.getMenu);
router.get('/getName/:slug', BranchController.getName);
router.get('/', BranchController.index)

module.exports = router;