const chai = require("chai")
const chaiHttp = require("chai-http")
const { expect } = chai

const { connectDB, PostsModel, DraftsModel, closeDB } = require("../db")

chai.use(chaiHttp)

let db

before(async () => {
  db = await connectDB()
})

after(async () => {
  // if (db) {
  await PostsModel.deleteMany({})
  await DraftsModel.deleteMany({})
  await closeDB()
  // await db.close()
  // }
})

// describe("Database Tests", () => {
//   it("connect to test DB", async () => {
//     expect(db.readyState).to.equal(1)
//   })
// })
