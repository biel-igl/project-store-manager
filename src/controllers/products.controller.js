const { productsService } = require('../services');

const listProducts = async (_req, res) => {
  const { message } = await productsService.findAll();
  return res.status(200).json(message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.createProduct(name);
  res.status(201).json({ id: message, name });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateProduct(id, name);
  return res.status(type || 200).json(message);
};

module.exports = {
  listProducts,
  productById,
  createNewProduct,
  updateProduct,
};