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

const CONTENT_TYPES = {
  about: "aboutPageContent",
  portfolio: "portfolioPageContent",
}

async function fetchPageContentType(filename, contentType) {
  const data = await client.getEntries({
    content_type: contentType,
    include: 3,
  })
  const fileName = `./src/contentful/${filename}.json`
  fs.writeFileSync(fileName, JSON.stringify(data.items[0], null, 2))
  console.log(
    `Saved ${data.items.length} entries of ${contentType} to ${fileName}`
  )
}

async function fetchAll() {
  await Promise.all(
    Object.entries(CONTENT_TYPES).map(([filename, contentType]) =>
      fetchPageContentType(filename, contentType)
    )
  )
}

fetchAll().catch(console.error)
