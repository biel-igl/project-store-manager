const { salesModel } = require('../models');

const listAll = async () => {
  const sales = await salesModel.findAll();
  return { type: null, message: sales };
};

module.exports = {
  listAll,
};