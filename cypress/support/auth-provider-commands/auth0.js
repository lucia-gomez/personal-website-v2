import "cypress-localstorage-commands"

function loginViaAuth0Ui(username, password) {
  cy.visit("admin")

  cy.origin(
    Cypress.env("auth0_domain"),
    { args: { username, password } },
    ({ username, password }) => {
      cy.get("input#username").type(username)
      cy.get("#password").type(`${password}{enter}`)
    }
  )

  cy.url().should("equal", Cypress.config().baseUrl + "/admin")
}

Cypress.Commands.add("loginToAuth0", () => {
  const username = Cypress.env("auth0_username")
  const password = Cypress.env("auth0_password")

  const log = Cypress.log({
    displayName: "AUTH0 LOGIN",
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  })
  log.snapshot("before")

  cy.session(`auth0-${username}`, () => {
    loginViaAuth0Ui(username, password)
  })
  cy.visit("admin")

  log.snapshot("after")
  log.end()
})
