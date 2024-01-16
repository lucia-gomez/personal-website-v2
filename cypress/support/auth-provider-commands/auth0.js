function loginViaAuth0Ui(username, password) {
  cy.visit("http://localhost:3000/admin")

  cy.origin(
    Cypress.env("auth0_domain"),
    { args: { username, password } },
    ({ username, password }) => {
      cy.get("input#username").type(username)
      cy.get("#password").type(`${password}{enter}`)
    }
  )

  cy.url().should("equal", "http://localhost:3000/admin")
}

Cypress.Commands.add("loginToAuth0", (username, password) => {
  const log = Cypress.log({
    displayName: "AUTH0 LOGIN",
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  })
  log.snapshot("before")

  cy.session(`auth0-${username}`, () => {
    loginViaAuth0Ui(username, password)
  })

  log.snapshot("after")
  log.end()
})
