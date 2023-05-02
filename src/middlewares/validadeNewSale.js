const { validadeProductId } = require('./validations/validadeSales');

module.exports = (req, res, next) => {
  const newSale = req.body;
  const validade = validadeProductId(newSale, res);
  const { message, resSale } = validade;
  return (
    (!newSale.length
      && res.status(400).json({ message: 'Object sales is require' }))
      || validade ? res.status(resSale).json({ message })
      : next()
  );
};