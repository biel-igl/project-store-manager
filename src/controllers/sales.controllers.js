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

const createNewSale = async (req, res) => {
  const newSale = req.body;
  const { type, message } = await salesService.createNewSale(newSale);
  if (type) return res.status(type).json({ message });
  return res.status(201).json({ id: message, itemsSold: newSale });
};

module.exports = {
  listSales,
  listSalesById,
  createNewSale,
};