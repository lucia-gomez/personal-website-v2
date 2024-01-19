const fields = [
  ["input#title", "[Test] Draft 0"],
  ["input#slug", "test-draft-0"],
  ["input#date", ""],
  ["input#image-url", "test.png"],
  ["textarea#summary", "This is a test summary"],
  ["textarea#editor_md", "This is some test content"],
]

describe("Blog Drafts", () => {
  before(() => {
    cy.loginToAuth0().then(() => {
      cy.contains("Admin").should("be.visible")
    })
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit("http://localhost:3000/admin/blog")
  })

  afterEach(() => {
    cy.saveLocalStorage()
  })

  it("Create draft", () => {
    fields.forEach(
      ([selector, value]) =>
        value.length > 0 && cy.get(selector).first().type(value)
    )
    fields.forEach(([selector, value]) =>
      cy.someShould(
        selector,
        x => x.includes(value),
        selector + " is incorrect"
      )
    )
    cy.window().scrollTo("bottom")
    cy.contains("Drafts").should("be.visible")
    cy.get('[data-test-id="blog-draft-item"]')
      .should("have.length", 1)
      .contains(fields[0][1])
    cy.get('[data-test-id="close-draft-btn"]').click()
  })

  it("Open and close draft", () => {
    cy.window().scrollTo("bottom")
    cy.get('[data-test-id="blog-draft-item"]').first().click()
    cy.window().scrollTo("top")
    fields.forEach(([selector, value]) =>
      cy.someShould(
        selector,
        x => x.includes(value),
        selector + " is incorrect"
      )
    )
    cy.get('[data-test-id="close-draft-btn"]').click()
    fields.forEach(([selector, _]) =>
      cy.someShould(selector, x => x.length === 0, selector + " isn't empty")
    )
  })

  it("Write a second draft", () => {
    fields[2][1] = "1/1/2024"
    fields.forEach(([selector, value]) => cy.get(selector).first().type(value))
    fields.forEach(([selector, value]) =>
      cy.someShould(
        selector,
        x => x.includes(value),
        selector + " is incorrect"
      )
    )
    cy.window().scrollTo("bottom")
    cy.get('[data-test-id="blog-draft-item"]').should("have.length", 2)
  })

  it("Delete a draft", () => {
    cy.window().scrollTo("bottom")
    cy.get('[data-test-id="blog-draft-item-delete"]')
      .should("have.length", 2)
      .first()
      .click()
    cy.get('[data-test-id="blog-draft-item"]').should("have.length", 1)
    cy.url().should("eq", "http://localhost:3000/admin/blog")
  })

  it("Publish a draft", () => {
    cy.get('[data-test-id="blog-draft-item"]')
      .should("have.length", 1)
      .first()
      .click()
    cy.get('[data-test-id="publish-draft-btn"]').click()

    // should redirect to blog page
    cy.url().should("eq", "http://localhost:3000/blog")

    // most recent blog post should be this one
    cy.get('[data-test-id="blog-post-item"]').contains(fields[4][1])
    cy.get('[data-test-id="blog-featured-post-item"]').first().click()
    cy.url().should("include", "/blog/" + fields[1][1])
    cy.get('[data-test-id="blog-post-title"]').contains(fields[0][1])
    cy.get('[data-test-id="blog-post-content"]').contains(fields[5][1])
  })
})
