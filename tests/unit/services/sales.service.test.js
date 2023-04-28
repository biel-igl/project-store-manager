const { expect } = require("chai");
const sinon = require("sinon");
const {
  productsMock,
  oneProduct,
  newProduct,
} = require("./mock/products.services.mock");

const { salesModel } = require('../../../src/models');
const {
  salesServicesMock,
  salesByIdMock,
} = require("./mock/sales.services.mock");
const { salesService } = require("../../../src/services");

describe("testa as vendas na camada Services", () => {
  describe("com get", () => {
    it("lista todos as vendas com sucesso", async () => {
      sinon.stub(salesModel, "findAll").resolves(salesServicesMock);
      const response = await salesService.listAll();
      expect(response.message).to.deep.equal(salesServicesMock);
    });

    it("retorna a venda com o id correto", async () => {
      sinon.stub(salesModel, 'findById').resolves(salesByIdMock);
      const response = await salesService.listById();
      expect(response.message).to.deep.equal(salesByIdMock);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
