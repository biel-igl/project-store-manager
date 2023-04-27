const { expect } = require("chai");
const sinon = require("sinon");
const {
  productsMock,
  oneProduct,
  newProduct,
} = require("./mock/products.model.mock");


const connection = require("../../../src/models/connection");
const { salesModelsMock } = require("./mock/sales.model.mock");

describe('testa as vendas na camada Models', () => {
  describe("com get", () => {
    it("lista todos as vendas com sucesso", async () => {
      sinon.stub(connection, "execute").resolves([salesModelsMock]);
      const response = await salesModel.findAll();
      expect(response).to.deep.equal(salesModelsMock);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});