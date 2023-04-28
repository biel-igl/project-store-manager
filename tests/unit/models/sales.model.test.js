const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../src/models/connection");
const { salesModelsMock, salesByIdMock } = require("./mock/sales.model.mock");
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
      const response = await salesModel.findById();
      expect(response).to.deep.equal(salesByIdMock);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});