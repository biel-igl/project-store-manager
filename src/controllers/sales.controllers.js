const { salesServices } = require('../services');

const listSales = async (_req, res) => {
  const { message } = await salesServices.listAll();
  return res.status(200).json(message);
};

module.exports = {
  listSales,
};