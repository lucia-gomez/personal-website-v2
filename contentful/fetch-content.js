const fs = require("fs")
const contentful = require("contentful")
require("dotenv").config()

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  environment: "master",
})

const CONTENT_TYPES = ["personalProject"]

async function fetchContentType(contentType) {
  const data = await client.getEntries({
    content_type: contentType,
    include: 2,
    order: "-fields.orderDate",
  })
  const fileName = `./src/contentful/${contentType}.json`
  fs.writeFileSync(fileName, JSON.stringify(data.items, null, 2))
  console.log(
    `Saved ${data.items.length} entries of ${contentType} to ${fileName}`
  )
}

async function fetchAll() {
  for (const type of CONTENT_TYPES) {
    await fetchContentType(type)
  }
}

fetchAll().catch(console.error)
