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
    auth0_client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config)
      return config
    },
  },
})
