const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
chai.use(sinonChai);

const { salesControllerMock } = require('./mock/sales.controllers.mock');
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
      await salesController.listSales();
      expect(res.status).to.have.been.calledOnceWith(200);
    })
  })
  afterEach(function () {
    sinon.restore();
  });
});