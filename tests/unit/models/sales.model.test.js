const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../src/models/connection");
const { salesModelsMock, salesByIdMock, returnNewSaleMock } = require("./mock/sales.model.mock");
const { salesModel } = require("../../../src/models");

describe('testa as vendas na camada Models', () => {
  describe("com get", () => {
    it("lista todos as vendas com sucesso", async () => {
      sinon.stub(connection, "execute").resolves([salesModelsMock]);
      const response = await salesModel.findAll();
      expect(response).to.deep.equal(salesModelsMock);
    });
    it("retorna a venda com o id correto", async () => {
      sinon.stub(connection, "execute").resolves([salesByIdMock]);
      const response = await salesModel.findById(1);
      expect(response).to.deep.equal(salesByIdMock);
    });
    it("se o id for incorreto", async () => {
      const response = await salesModel.findById(12);
      expect(response).to.deep.equal([]);
    });
  });
  describe('com post', () => {
    it('Faz o INSERT corretamente', async() => {
      sinon.stub(connection, "execute").resolves([{ insertId: 3 }]);
      const response = await salesModel.insertNewSale('produto top');
      expect(response).to.be.deep.equal(returnNewSaleMock.id);
    })
  })
  afterEach(function () {
    sinon.restore();
  });
});