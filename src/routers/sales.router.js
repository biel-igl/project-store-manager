const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');

router.get('/', salesController.listSales);

module.exports = router;
