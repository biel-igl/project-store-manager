const { validadeFields } = require('./validations/validadeSales');

module.exports = (req, res, next) => {
  const newSale = req.body;
  return (!newSale.length && res.status(400).json({ message: 'Object sales is require' }))
    || validadeFields(newSale, res)
    || next();
};