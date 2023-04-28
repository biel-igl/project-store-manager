const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');

router.get('/', salesController.listSales);
router.get('/:id', salesController.listSalesById);

module.exports = router;
