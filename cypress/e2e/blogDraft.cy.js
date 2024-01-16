describe("Blog Drafts", () => {
  before(() => {
    cy.loginToAuth0(
      Cypress.env("auth0_username"),
      Cypress.env("auth0_password")
    )
    // cy.contains("Admin").should("be.visible")
  })

  beforeEach(() => {
    cy.visit("http://localhost:3000/admin")
    cy.get('[data-test-id="blog-admin-btn"]').first().click()
  })

  it("Create draft", () => {
    const testData = {
      title: "[Test] Draft 0",
      slug: "test-draft-0",
      date: "1/1/2023",
      imageUrl: "test.png",
      summary: "This is a test summary",
      content: "This is some test content",
    }
    cy.get("input#title").first().type(testData.title)
    cy.get("input#slug").first().type(testData.slug)
    cy.get("input#date").first().type(testData.date)
    cy.get("input#image-url").first().type(testData.imageUrl)
    cy.get("textarea#summary").first().type(testData.summary)
    cy.get("textarea#editor_md").type(testData.content)
  })
})
