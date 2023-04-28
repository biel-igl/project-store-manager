const validadeQuantity = (object, res) => (
  !object.quantity && object.quantity !== 0
  && res.status(400).json({ message: '"quantity" is required' }))
  || (object.quantity === 0 
    && res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' }));

const validadeFields = (sale, res) => sale
  .map((each) => (
    !each.productId
    && res.status(400).json({ message: '"productId" is required' }))
    || validadeQuantity(each, res));

module.exports = {
  validadeFields,
};