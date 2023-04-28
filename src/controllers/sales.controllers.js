const { salesService } = require('../services');

const listSales = async (_req, res) => {
  const { message } = await salesService.listAll();
  res.status(200).json(message);
};

const listSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.salesById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  listSales,
  listSalesById,
};