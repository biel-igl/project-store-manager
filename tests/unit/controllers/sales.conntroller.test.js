const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
chai.use(sinonChai);

const {
  salesControllerMock,
  salesByIdMock,
} = require("./mock/sales.controllers.mock");
const { salesService } = require("../../../src/services");
const { salesController } = require("../../../src/controllers");

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
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.salesById(req, res);
      expect(res.status).to.habe.been.calledOnceWith(200);
    })
  });
  afterEach(function () {
    sinon.restore();
  });
});