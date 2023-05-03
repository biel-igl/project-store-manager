const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
chai.use(sinonChai);
const { productsControllerMock, newProduct, oneProduct } = require("./mock/products.controller.mock");
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

    it("é chamado o json com o produto correnpondente ao id", async () => {
      const req = { params: { id: 3} };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(oneProduct);
      sinon
        .stub(productsService, "findById")
        .resolves({ message: oneProduct });
      await productsController.productById(req, res);
      expect(res.json).to.have.been.calledWith(oneProduct);
    });

    it("não encontra o id", async () => {
      sinon
        .stub(productsService, "findById")
        .resolves({ type: 404, message: "Product not found" });
      const req = { params: { id: 120 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ message: "Product not found" });
      await productsController.productById(req, res);
      expect(res.status).to.have.been.calledOnceWith(404);
      expect(res.json).to.have.been.calledWith({
        message: "Product not found",
      });
    });
  });
  describe('com post', () => {
    it('Novo cadastro com sucesso', async () => {
      sinon
        .stub(productsService, "createProduct")
        .resolves({ message: 4 });
      const req = { body: { name: "produto top" } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(newProduct);
      await productsController.createNewProduct(req, res);
      expect(res.status).to.have.been.calledOnceWith(201);
      expect(res.json).to.have.been.calledWith(newProduct);
    });
  });
  describe('com put', () => {
    it('Atualiza rpoduto com sucesso', async () => {
      sinon.stub(productsService, 'updadeProduct').resolves({ id: 2, name: 'Martelo do Batman' });
      const req = { body: { name: 'Martelo do Batman' } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ id: 2, name: "Martelo do Batman" });
      await productsController.updadeProduct(req, res);
      expect(res.status).to.have.been.calledOnceWith(200);
      expect(res.json).to.have.been.calledWith({
        id: 2,
        name: "Martelo do Batman",
      });
    })
  })
    
  afterEach(function () {
    sinon.restore();
  });
});
