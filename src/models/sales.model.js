const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT
      s.id saleId, sp.product_id productId, sp.quantity quantity, s.date date
    FROM StoreManager.sales s
      INNER JOIN StoreManager.sales_products sp ON s.id = sp.sale_id
    ORDER BY s.id ASC;`,
  );
  return result;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT
      sp.product_id productId, sp.quantity quantity, s.date date
    FROM StoreManager.sales s
      INNER JOIN StoreManager.sales_products sp ON s.id = sp.sale_id
      WHERE s.id = ?
    ORDER BY s.id ASC;`,
    [id],
  );
  return result;
};

module.exports = {
  findAll,
  findById,
};