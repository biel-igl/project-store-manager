const { productsModel } = require('../models');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (id) => {
  const product = await productsModel.findById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

const createProduct = async (name) => {
  const product = await productsModel.createNewProduct(name);
  return { type: null, message: product };
};

const updateProduct = async (id, name) => {
  const notExistId = await findById(id);
  const { type, message } = notExistId;
  console.log(type, message);
  if (type !== null) return { type, message };
  const update = await productsModel.updateProduct(id, name);
  return { type: null, message: update };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProduct,
};