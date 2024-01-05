const chai = require("chai")

const { expect } = chai
const app = require("../index")
const mongoose = require("mongoose")
const sinon = require("sinon")

const { PostsModel } = require("../db")

const postData1 = {
  title: "Test title",
  summary: "Test summary",
  content: "Test content",
  slug: "post1",
  imageUrl: "test-image-url.png",
  dateString: "1-1-2023",
  datetime: "123",
  likes: 0,
}
const updateData1 = {
  title: "Updated title",
  summary: "Updated summary",
  content: "Updated content",
  dateString: "1-2-2023",
  imageUrl: "updated-image-url.png",
}
const slugs = [postData1.slug, "post2", "post3"]
let postId

describe("Posts API/Model Tests", () => {
  it("get all posts - empty", async () => {
    const res = await chai.request(app).get("/api/get")
    expect(res).to.have.status(200)
    expect(res.body.length).to.equal(0)

    const posts = await PostsModel.find({})
    expect(posts.length).to.equal(0)
  })

  it("create a post", async () => {
    const res = await chai.request(app).post("/api/create").send(postData1)
    expect(res).to.have.status(200)
    postId = res.body._id

    const createdPost = await PostsModel.findOne({ _id: res.body._id })
    expect(createdPost).to.exist
    expect(createdPost.title).to.equal(postData1.title)
    expect(createdPost.summary).to.equal(postData1.summary)
    expect(createdPost.slug).to.equal(postData1.slug)
    expect(createdPost.content).to.equal(postData1.content)
    expect(createdPost.imageUrl).to.equal(postData1.imageUrl)
    expect(createdPost.date).to.equal(postData1.datetime)
    expect(createdPost.dateString).to.equal(postData1.dateString)
    expect(createdPost.likes).to.equal(postData1.likes)

    const allPosts = await PostsModel.find({})
    expect(allPosts.length).to.equal(1)
  })

  it("get post by slug", async () => {
    const res = await chai.request(app).get("/api/get/" + postData1.slug)
    expect(res).to.have.status(200)
    expect(res.body.slug).to.equal(postData1.slug)

    const foundPost = await PostsModel.findOne({ _id: res.body._id })
    expect(foundPost.slug).to.equal(postData1.slug)
  })

  it("like post by id", async () => {
    const res = await chai.request(app).post("/api/like").send({ id: postId })
    expect(res).to.have.status(200)

    const post = await PostsModel.findOne({ _id: postId })
    expect(post.likes).to.equal(1)
  })

  it("unlike post by id", async () => {
    const res = await chai.request(app).post("/api/unlike").send({ id: postId })
    expect(res).to.have.status(200)

    const post = await PostsModel.findOne({ _id: postId })
    expect(post.likes).to.equal(0)
  })

  it("like twice then reset post likes", async () => {
    await chai.request(app).post("/api/like").send({ id: postId })
    await chai.request(app).post("/api/like").send({ id: postId })

    let post = await PostsModel.findOne({ _id: postId })
    expect(post.likes).to.equal(2)

    const res = await chai
      .request(app)
      .post("/api/likes/reset")
      .send({ id: postId })
    expect(res).to.have.status(200)

    post = await PostsModel.findOne({ _id: postId })
    expect(post.likes).to.equal(0)
  })

  it("unlike with 0 likes", async () => {
    const res = await chai.request(app).post("/api/unlike").send({ id: postId })
    expect(res).to.have.status(200)

    const post = await PostsModel.findOne({ _id: postId })
    expect(post.likes).to.equal(0)
  })

  it("delete post by id", async () => {
    const res = await chai.request(app).delete("/api/delete/" + postId)
    expect(res).to.have.status(200)

    const posts = await PostsModel.find({})
    expect(posts.length).to.equal(0)
  })

  it("delete non-existent post", async () => {
    const res = await chai.request(app).delete("/api/delete/" + postId)
    expect(res).to.have.status(400)
  })

  it("recreate and update post", async () => {
    const res1 = await chai.request(app).post("/api/create").send(postData1)
    expect(res1).to.have.status(200)
    postId = res1.body._id

    const res2 = await chai
      .request(app)
      .post("/api/update")
      .send({ id: postId, ...updateData1 })
    expect(res2).to.have.status(200)

    const post = await PostsModel.findOne({ _id: postId })
    expect(post._id).to.deep.equal(new mongoose.Types.ObjectId(postId))
    expect(post.title).to.equal(updateData1.title)
    expect(post.summary).to.equal(updateData1.summary)
    expect(post.content).to.equal(updateData1.content)
    expect(post.dateString).to.equal(updateData1.dateString)
    expect(post.imageUrl).to.equal(updateData1.imageUrl)
  })
})

describe("Slug API Tests", () => {
  it("create several posts", async () => {
    let res = await chai
      .request(app)
      .post("/api/create")
      .send({ ...postData1, slug: slugs[1] })
    expect(res).to.have.status(200)

    res = await chai
      .request(app)
      .post("/api/create")
      .send({ ...postData1, slug: slugs[2] })
    expect(res).to.have.status(200)

    const posts = await PostsModel.find({})
    expect(posts.length).to.equal(3)
  })
  it("get prev post by slug - has post", async () => {
    // previous post back in time
    const res = await chai.request(app).get("/api/prev/" + slugs[0])
    expect(res).to.have.status(200)
    expect(res.body).to.not.deep.equal({})
    expect(res.body.slug).to.equal(slugs[1])
  })
  it("get prev post by slug - no post", async () => {
    const res = await chai.request(app).get("/api/prev/" + slugs[2])
    expect(res).to.have.status(200)
    expect(res.body).to.deep.equal({})
  })
  it("get prev post by slug - invalid slug", async () => {
    const res = await chai.request(app).get("/api/prev/bad-slug")
    expect(res).to.have.status(404)
  })
  it("get prev post by slug - missing param", async () => {
    const res = await chai.request(app).get("/api/prev/")
    expect(res).to.have.status(404)
  })
  it("get prev stub mongodb error", async () => {
    const findOneStub = sinon.stub(PostsModel, "findOne")
    const msg = "Simulated MongoDB error"
    findOneStub.rejects(new Error(msg))

    try {
      const res = await chai.request(app).get("/api/prev/" + slugs[0])
      if (res.status >= 400) {
        throw new Error(`${res.status} ${res.error}`)
      }
      expect.fail("Expected the API call to fail, but it succeeded")
    } catch (err) {
      expect(err.message).to.contain(500)
    } finally {
      findOneStub.restore()
    }
  })
})
