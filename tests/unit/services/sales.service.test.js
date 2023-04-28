const { expect } = require("chai");
const sinon = require("sinon");
const {
  productsMock,
  oneProduct,
  newProduct,
} = require("./mock/products.services.mock");

const { salesModel } = require('../../../src/models');
const { salesServicesMock } = require("./mock/sales.services.mock");
const { salesService } = require("../../../src/services");

describe("testa as vendas na camada Services", () => {
  describe("com get", () => {
    it("lista todos as vendas com sucesso", async () => {
      sinon.stub(salesModel, "findAll").resolves(salesServicesMock);
      const response = await salesService.listAll();
      expect(response.message).to.deep.equal(salesServicesMock);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
