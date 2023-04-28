const { salesService } = require('../services');

const listSales = async (_req, res) => {
  const { message } = await salesService.listAll();
  res.status(200).json(message);
};

module.exports = {
  listSales,
};