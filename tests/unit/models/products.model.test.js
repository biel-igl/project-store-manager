const { expect } = require('chai');
const sinon = require('sinon');
const { productsMock, oneProduct } = require("./mok/products.model.mock");

const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('testa os produtos', () => {
  it("lista todos os produtos com sucesso", async () => {
      sinon.stub(connection, "execute").resolves([productsMock]);
      const response = await productsModel.findAll();
      expect(response).to.deep.equal(productsMock);
  });
  
  it('lista o produto de acordo com o id', async () => {
    sinon.stub(connection, "execute").resolves([oneProduct]);
    const response = await productsModel.findById(3);
    expect(response).to.deep.equal(oneProduct);
  });

  afterEach(function () {
    sinon.restore();
  });
})