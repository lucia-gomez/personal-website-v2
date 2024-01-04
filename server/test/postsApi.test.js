const chai = require("chai")
const { expect } = chai
const app = require("../index")

// const { expect } = require("chai")
const { PostsModel, getId } = require("../db")

const postData1 = {
  _id: getId(),
  title: "Test title",
  summary: "Test summary",
  content: "Test content",
  slug: "test-title",
  imageUrl: "test-image-url.png",
  dateString: "1-1-2023",
  date: "123",
  likes: 0,
}

describe("Posts API/Model Tests", () => {
  it("get all posts - empty", async () => {
    const res = await chai.request(app).get("/api/get")
    expect(res).to.have.status(200)
    console.log(res.body)

    const posts = await PostsModel.find({})
    expect(posts.length).to.equal(0)
  })

  it("create a post", async () => {
    const newPost = await PostsModel.create(postData1)
    const createdPost = await PostsModel.findOne({ _id: newPost._id })

    expect(createdPost).to.exist
    expect(createdPost.title).to.equal(postData1.title)
    expect(createdPost._id).to.deep.equal(postData1._id)

    const allPosts = await PostsModel.find({})
    expect(allPosts.length).to.equal(1)
  })

  it("get post by slug", async () => {
    const foundPost = await PostsModel.findOne({ slug: postData1.slug })
    expect(foundPost.title).to.equal(postData1.title)
    expect(foundPost._id).to.deep.equal(postData1._id)
  })
})
