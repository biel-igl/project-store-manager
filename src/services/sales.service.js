const { salesModel } = require('../models');
const { findById } = require('./products.service');

const listAll = async () => {
  const sales = await salesModel.findAll();
  return { type: null, message: sales };
};

const salesById = async (id) => {
  const sale = await salesModel.findById(id);
  if (sale.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: sale };
};

const createNewSale = async (newSale) => {
  const mapSale = await Promise.all(newSale.map(async (each) => {
    const validade = await findById(each.productId);
    return (validade.type !== null) || undefined;
  }));
  const find = mapSale.find((one) => one !== undefined);
  if (find) {
    return { type: 404, message: 'Product not found' };
  }
  const sale = await salesModel.createNewSale(newSale);
  return { type: null, message: sale };
};

module.exports = {
  listAll,
  salesById,
  createNewSale,
};