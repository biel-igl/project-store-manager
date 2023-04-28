const { expect } = require("chai");
const sinon = require("sinon");
const { salesModel } = require('../../../src/models');
const {
  salesServicesMock,
  salesByIdMock,
  newSaleMock,
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
      const response = await salesService.salesById(1);
      expect(response.message).to.deep.equal(salesByIdMock);
    });
    it("se o id for incorreto", async () => {
      const response = await salesService.salesById(12);
      expect(response).to.deep.equal({ type: 404, message: "Sale not found" });
    });
  });

  describe('com post', () => {
    it('cria nova venda com sucesso ', async () => {
      sinon.stub(salesModel, 'insertNewSale').resolves({ id: 3 });
      const result = await salesService.createNewSale(newSaleMock);
      expect(response.message).to.deep.equal({ id: 3 });
    })
  })

  afterEach(function () {
    sinon.restore();
  });
});
