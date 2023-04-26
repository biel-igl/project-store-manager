const { expect } = require('chai');
const sinon = require("sinon");
const { products } = require('./mok/products.model.mock')

const { product } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('testa os produtos', () => {
  describe('lista todos os produtos', () => {
    it('com sucesso', async () => {
      sinon.stub(connection, 'execute').resolves([products])
      const response = await product.findAll();
      expect(response).to.deep.equal(productMock);
    })
  });
  afterEach(function () {
    sinon.restore();
  });
})