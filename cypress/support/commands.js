// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
require("./auth-provider-commands/auth0")

Cypress.Commands.add("getScreenWidth", () =>
  cy.window().then(win => win.innerWidth)
)

Cypress.Commands.add("someShould", (selector, condition, errorMsg) => {
  cy.get(selector).should($elements => {
    let conditionMet = false
    $elements.each((_, element) => {
      if (condition(element.value)) {
        conditionMet = true
        return false
      }
    })
    expect(conditionMet, errorMsg).to.be.true
  })
})

Cypress.Commands.add("createTestBlogPosts", num => {
  for (let i = 0; i < num; i++) {
    cy.request("POST", "http://localhost:3001/api/test/posts", {
      count: i,
    }).then(response => {
      expect(response.status).to.eq(200)
    })
  }
})

before(() => {
  cy.createTestBlogPosts(4)
})

after(() => {
  cy.request("DELETE", "http://localhost:3001/api/test").then(response => {
    expect(response.status).to.eq(200)
  })
})
