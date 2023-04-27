const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
chai.use(sinonChai);

const { salesControllerMock } = require('./mock/sales.controllers.mock')

describe("testa as vendas na camada Controllers", () => {
  describe('com get', () => {
    it('é chamado o status com o código 200', () => {
      sinon
        .stub(salesService, "findAll")
        .resolves({ type: null, message: salesControllerMock });
    })
  })
  afterEach(function () {
    sinon.restore();
  });
});