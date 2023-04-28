const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');

const validadeNewSale = require('../middlewares/validadeNewSale');

router.get('/', salesController.listSales);
router.get('/:id', salesController.listSalesById);
router.post('/', validadeNewSale, salesController.createNewSale);

module.exports = router;
