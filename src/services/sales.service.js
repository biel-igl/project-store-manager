const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { type: null, message: sales };
};

module.exports = {
  findAll,
};