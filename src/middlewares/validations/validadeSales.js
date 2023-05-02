const validadeQuantity = (object) => (
  !object.quantity && object.quantity !== 0
  && { message: '"quantity" is required', resSale: 400 })
  || (object.quantity <= 0
    && { message: '"quantity" must be greater than or equal to 1', resSale: 422 });
  
const validadeProductId = (sale) => {
  const mapSale = sale.map(
    (each) => (!each.productId && { message: '"productId" is required', resSale: 400 })
    || validadeQuantity(each),
  );
  return mapSale.find((cada) => cada !== false) || false;
};

module.exports = {
  validadeProductId,
};