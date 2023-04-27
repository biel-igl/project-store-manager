const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
chai.use(sinonChai);
const { productsControllerMock, newProduct } = require("./mock/products.controller.mock");
const { productsService } = require("../../../src/services");
const { productsController } = require("../../../src/controllers");

describe("testa os produtos na camada Controllers", () => {
  describe("com get", () => {
    it("é chamado o status com o código 200", async () => {
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "findAll")
        .resolves({ type: null, message: productsControllerMock });
      await productsController.listProducts(req, res);
      expect(res.status).to.have.been.calledOnceWith(200);
    });

    it("é chamado o json com a lista de produtos", async () => {
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "findAll")
        .resolves({ type: null, message: productsControllerMock });
      await productsController.listProducts(req, res);
      expect(res.json).to.have.been.calledWith(productsControllerMock);
    });
  });
  describe('com post', () => {
    it('Novo cadastro com sucesso', async () => {
      sinon
        .stub(productsService, "createProduct")
        .resolves({message: 4});
      const req = { body: { name: "produto top" } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(newProduct);
      await productsController.createNewProduct(req, res);
      expect(res.status).to.have.been.calledOnceWith(201);
      expect(res.json).to.have.been.calledWith(newProduct);
    })
  })
    
  afterEach(function () {
    sinon.restore();
  });
});
