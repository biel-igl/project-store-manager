const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
chai.use(sinonChai);

const {
  salesControllerMock,
  salesByIdMock,
  returnNewSaleMock,
} = require("./mock/sales.controllers.mock");
const { salesService } = require("../../../src/services");
const { salesController } = require("../../../src/controllers");
const { newSaleMock } = require("./mock/sales.controllers.mock");

describe("testa as vendas na camada Controllers", () => {
  describe('com get', () => {
    it('é chamado o status com o código 200', async () => {
      sinon
        .stub(salesService, "listAll")
        .resolves({ type: null, message: salesControllerMock });
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.listSales(req, res);
      expect(res.status).to.have.been.calledOnceWith(200);
    });
    it('retorna a venda com o id correto', async () => {
      sinon
        .stub(salesService, "salesById")
        .resolves({ type: null, message: salesByIdMock });
      const req = { params: { id: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.listSalesById(req, res);
      expect(res.status).to.have.been.calledOnceWith(200);
    });
    it("não encontra o id", async () => {
      sinon
        .stub(salesService, "salesById")
        .resolves({ type: 404, message: 'Sale not found' });
      const req = { params: { id: 12 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ message: "Sale not found" });
      await salesController.listSalesById(req, res);
      expect(res.status).to.have.been.calledOnceWith(404);
    });
  });
  describe('com post', () => {
    it('Nvo cadastro com sucesso', async () => {
      sinon.stub(salesService, 'createNewSale').resolves({ message: 3 });
      const req = { body: newSaleMock};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(newSaleMock);
      await salesController.createNewSale(req, res);
      expect(res.status).to.have.been.calledOnceWith(201);
    })
  })
  afterEach(function () {
    sinon.restore();
  });
});