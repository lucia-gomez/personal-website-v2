const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")

let mongoServer

const connectDB = async () => {
  try {
    const database =
      process.env.NODE_ENV === "development"
        ? "personalWebsiteDev"
        : "personalWebsite"
    let uri = `mongodb+srv://admin:${process.env.REACT_APP_MONGO_PASSWORD}@luciagomez.xykba6v.mongodb.net/${database}?retryWrites=true&w=majority`

    if (process.env.NODE_ENV === "test") {
      if (mongoServer) {
        return mongoose.connection
      }
      mongoServer = await MongoMemoryServer.create()
      uri = mongoServer.getUri()
      process.env.MONGO_TEST_URI = uri
      return
    }

    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message)
  }
}

const closeDB = async () => {
  if (process.env.NODE_ENV === "test") {
    if (mongoServer) {
      await mongoose.connection.close(true) // Pass 'true' to force close connections
      await mongoose.disconnect()
      await mongoServer.stop()
      mongoServer = null
    }
  } else {
    await mongoose.connection.close()
  }
}

const postsSchema = new mongoose.Schema({
  _id: ObjectId,
  date: String,
  dateString: String,
  title: String,
  summary: String,
  content: String,
  slug: String,
  likes: Number,
  imageUrl: String,
})
const PostsModel = mongoose.model("Posts", postsSchema, "posts")

const draftsSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  summary: String,
  content: String,
  slug: String,
  imageUrl: String,
})
const DraftsModel = mongoose.model("Drafts", draftsSchema, "drafts")

const emailSchema = new mongoose.Schema({
  _id: ObjectId,
  email: {
    type: String,
    unique: true,
  },
  dateAdded: String,
})
const SubscribersModel = mongoose.model(
  "Subscribers",
  emailSchema,
  "subscribers"
)
const SubscribersTestModel = mongoose.model(
  "SubscribersTest",
  emailSchema,
  "subscribersTest"
)

const getId = () => new mongoose.Types.ObjectId()

module.exports = {
  connectDB,
  closeDB,
  getId,
  DraftsModel,
  PostsModel,
  SubscribersModel,
  SubscribersTestModel,
}
