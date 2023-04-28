const { validadeObject, validadeFields } = require('./validations/validadeSales');

module.exports = async (req, res, next) => {
  const newSale = req.body;
  newSale.map(
    (each) =>
 
      validadeObject(each, res) || validadeFields(each, res),
);
  return next();
};