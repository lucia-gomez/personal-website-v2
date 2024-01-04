const chai = require("chai")
const chaiHttp = require("chai-http")
const { expect } = chai
const mongoose = require("mongoose")

const { connectDB, PostsModel, DraftsModel, closeDB } = require("../db")

chai.use(chaiHttp)

let db

before(async () => {
  await connectDB()
  await mongoose.connect(process.env.MONGO_TEST_URI)
  db = mongoose.connection
})

after(async () => {
  await PostsModel.deleteMany({})
  await DraftsModel.deleteMany({})
  await closeDB()
})

describe("Database Tests", () => {
  it("connect to test DB", async () => {
    expect(db.readyState).to.equal(1)
  })
})
