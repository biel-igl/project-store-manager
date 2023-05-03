const { expect } = require('chai');
const sinon = require('sinon');
const { productsMock, oneProduct, newProduct } = require("./mock/products.model.mock");

const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('testa os produtos na camada Models', () => {
  describe("com get", () => {
    it("lista todos os produtos com sucesso", async () => {
      sinon.stub(connection, "execute").resolves([productsMock]);
      const response = await productsModel.findAll();
      expect(response).to.deep.equal(productsMock);
    });

    it("lista o produto de acordo com o id", async () => {
      sinon.stub(connection, "execute").resolves([[oneProduct]]);
      const response = await productsModel.findById(3);
      expect(response).to.deep.equal(oneProduct);
    });

    it("se o id for invalido", async () => {
      const response = await productsModel.findById(12);
      expect(response).to.equal(undefined);
    });
  });
  describe('com post', () => {
    it("Novo cadastro com sucesso", async () => {
      sinon.stub(connection, "execute").resolves([{ insertId: 4}]);
      const response = await productsModel.createNewProduct('produto top');
      expect(response).to.be.deep.equal(newProduct.id);
    });
  })
  describe('Com put', () => {
    it('Atualiza com sucesso', async () => {
      sinon.stub(connection, "execute").resolves({id: 1, name: 'produto top'});
      const response = await productsModel.updateProduct(1, 'produto top');
      expect(response).to.be.deep.equal({ id: 1, name: "produto top" });
    })
  })

  afterEach(function () {
    sinon.restore();
  });
})