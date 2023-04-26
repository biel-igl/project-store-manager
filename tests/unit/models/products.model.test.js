const { expect } = require("chai");
const { productMock } = require('./mok/products.model.mock')

const { productModel } = require('../../../src/models')

describe('testa os produtos', () => {
  describe('lista todos os produtos', () => {
    it('com sucesso', () => {
      const response = productsModel.findAll();
      expect(response).to.deep.equal(productMock);
    })
  })
})