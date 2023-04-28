const { salesModel } = require('../models');

const listAll = async () => {
  const sales = await salesModel.findAll();
  return { type: null, message: sales };
};

const salesById = async (id) => {
  const sale = await salesModel.findById(id);
  if (sale.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: sale };
};

module.exports = {
  listAll,
  salesById,
};