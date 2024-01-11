const chai = require("chai")
const { expect } = chai
const { app } = require("../index")
const mongoose = require("mongoose")
const testSimulateMongoError = require("./test")

const DraftsModel = require("../models/draftModel")

const draftData1 = {
  title: "Draft title",
  summary: "Draft summary",
  content: "Draft content",
  slug: "draft-title",
  imageUrl: "draft-image.png",
}
const updateData1 = {
  title: "Updated draft title",
  summary: "Updated draft summary",
  content: "Updated draft content",
  slug: "updated-draft-title",
  imageUrl: "updated-draft-image.png",
}
let draftId

const mockError = async (fnToMock, apiRequest) =>
  testSimulateMongoError(DraftsModel, fnToMock, apiRequest)

describe("Drafts API/Model Tests", () => {
  it("get all drafts - empty", async () => {
    const res = await chai.request(app).get("/api/draft/get")
    expect(res).to.have.status(200)
    expect(res.body.length).to.equal(0)

    const drafts = await DraftsModel.find({})
    expect(drafts.length).to.equal(0)
  })

  it("get all drafts - mongodb error", async () =>
    await mockError("find", () => chai.request(app).get("/api/draft/get")))

  it("create draft", async () => {
    const res = await chai
      .request(app)
      .post("/api/draft/create")
      .send(draftData1)
    expect(res).to.have.status(200)
    draftId = res.body._id

    const draft = await DraftsModel.findOne({ _id: draftId })
    expect(draft).to.exist
    expect(draft.title).to.equal(draftData1.title)
    expect(draft.summary).to.equal(draftData1.summary)
    expect(draft.content).to.equal(draftData1.content)
    expect(draft.slug).to.equal(draftData1.slug)
    expect(draft.imageUrl).to.equal(draftData1.imageUrl)

    const allDrafts = await DraftsModel.find({})
    expect(allDrafts.length).to.equal(1)
  })

  it("create draft - mongodb error", async () =>
    await mockError("create", () =>
      chai.request(app).post("/api/draft/create")
    ))

  it("delete draft by id", async () => {
    const res = await chai.request(app).delete("/api/draft/" + draftId)
    expect(res).to.have.status(200)

    const drafts = await DraftsModel.find({})
    expect(drafts.length).to.equal(0)
  })

  it("delete draft by id - mongodb error", async () =>
    await mockError("deleteOne", () =>
      chai.request(app).delete("/api/draft/1")
    ))

  it("recreate and update draft", async () => {
    const res1 = await chai
      .request(app)
      .post("/api/draft/create")
      .send(draftData1)
    expect(res1).to.have.status(200)
    draftId = res1.body._id

    const res2 = await chai
      .request(app)
      .post("/api/draft/update")
      .send({ id: draftId, ...updateData1 })
    expect(res2).to.have.status(200)

    const draft = await DraftsModel.findOne({ _id: draftId })
    expect(draft).to.exist
    expect(draft._id).to.deep.equal(new mongoose.Types.ObjectId(draftId))
    expect(draft.title).to.equal(updateData1.title)
    expect(draft.summary).to.equal(updateData1.summary)
    expect(draft.content).to.equal(updateData1.content)
    expect(draft.slug).to.equal(updateData1.slug)
    expect(draft.imageUrl).to.equal(updateData1.imageUrl)
  })

  it("update draft - mongodb error", async () =>
    await mockError("updateOne", () =>
      chai.request(app).post("/api/draft/update").send(updateData1)
    ))
})
