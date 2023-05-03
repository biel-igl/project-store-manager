const express = require('express');

const router = express.Router();

const { productsController } = require('../controllers');

const validateName = require('../middlewares/validateName');

router.get(
  '/',
  productsController.listProducts,
);

router.get(
  '/:id',
  productsController.productById,
);

router.post(
  '/',
  validateName,
  productsController.createNewProduct,
);

router.put('/:id', productsController.updadeProduct);

module.exports = router;