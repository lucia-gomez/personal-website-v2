const { defineConfig } = require("cypress")
const dotenv = require("dotenv")
dotenv.config()

module.exports = defineConfig({
  projectId: "p9fx4n",
  env: {
    auth0_username: process.env.REACT_APP_AUTH0_USERNAME,
    auth0_password: process.env.REACT_APP_AUTH0_PASSWORD,
    auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,
    auth0_audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    auth0_client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
  },
  e2e: {
    setupNodeEvents(on, config) {},
  },
})
