const { expect } = require("chai");
const sinon = require("sinon");
const { productsMock, oneProduct, newProduct } = require("./mock/products.services.mock");

const { productsModel } = require("../../../src/models");
const { productsService } = require("../../../src/services");

describe("testa os produtos na camada Services", () => {
  describe("com get", () => {
    it("lista todos os produtos com sucesso", async () => {
      sinon.stub(productsModel, "findAll").resolves(productsMock);
      const response = await productsService.findAll();
      expect(response.message).to.deep.equal(productsMock);
    });

    it("lista o produto de acordo com o id valido", async () => {
      sinon.stub(productsModel, "findById").resolves(oneProduct);
      const response = await productsService.findById(3);
      expect(response.message).to.deep.equal(oneProduct);
    });

    it("se o id for invalido", async () => {
      const response = await productsService.findById(12);
      expect(response.message).to.equal("Product not found");
    });
  });
  describe("com post", () => {
    it("Novo cadastro com sucesso", async () => {
      sinon.stub(productsModel, "createNewProduct").resolves({id: 4});
      const response = await productsService.createProduct("produto top");
      expect(response.message).to.deep.equal({id:4});
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
