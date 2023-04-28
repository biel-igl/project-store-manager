const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT id FROM StoreManager.sales ORDER BY id ASC;',
  );
  return result;
};

module.exports = {
  findAll,
};