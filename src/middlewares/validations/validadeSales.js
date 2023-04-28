const validadeObject = (object, res) => !object
  && res.status(400).json({ message: 'Object sales is require' });

  const validadeQuantity = (object, res) =>
    !object.quantity > 0 
    && res
      .status(400)
      .json({ message: '"quantity" must be greater than or equal to 1' });

const validadeFields = (object, res) =>
  (!object.productId
    && res.status(400).json({ message: '"productId" is required' }))
  || validadeQuantity(object, res)
  || (!object.quantity
    && res.status(400).json({ message: '"quantity" is required' }));

module.exports = {
  validadeObject,
  validadeFields,
};