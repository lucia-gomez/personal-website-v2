const chai = require("chai")
const chaiHttp = require("chai-http")
const { expect } = chai
const mongoose = require("mongoose")
const sinon = require("sinon")
const { mailjet } = require("../index")

const {
  connectDB,
  closeDB,
  PostsModel,
  DraftsModel,
  SubscribersModel,
  SubscribersTestModel,
} = require("../db")

chai.use(chaiHttp)

let db

before(async () => {
  process.env.NODE_ENV = "test"
  await connectDB()
  await mongoose.connect(process.env.MONGO_TEST_URI)
  db = mongoose.connection

  // stub mailjet actions
  const sandbox = sinon.createSandbox()
  const mailjetStub = sandbox.stub(mailjet, "post")
  const mailjetResponse = {
    status: "success",
  }
  mailjetStub.returns({
    request: sandbox.stub().resolves(mailjetResponse),
  })
})

after(async () => {
  await PostsModel.deleteMany({})
  await DraftsModel.deleteMany({})
  await SubscribersModel.deleteMany({})
  await SubscribersTestModel.deleteMany({})
  await closeDB()
})

describe("Database Tests", () => {
  it("connect to test DB", async () => {
    expect(db.readyState).to.equal(1)
  })
})

async function testSimulateMongoError(model, fnToMock, apiRequest) {
  const stub = sinon.stub(model, fnToMock)
  const msg = "Simulated MongoDB error"
  stub.rejects(new Error(msg))

  try {
    const res = await apiRequest()
    if (res.status >= 400) {
      throw new Error(`${res.status} ${res.error}`)
    }
    expect.fail("Expected the API call to fail, but it succeeded")
  } catch (err) {
    expect(err.message).to.contain(500)
  } finally {
    stub.restore()
  }
}

module.exports = testSimulateMongoError
