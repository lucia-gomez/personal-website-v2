const fields = [
  ["input#title", "[Test] Updated Post"],
  ["input#slug", "test-updated-slug"],
  ["input#date", "1/30/2024"],
  ["input#image-url", "test-updated.png"],
  ["textarea#summary", "This is an updated test summary"],
  ["textarea#editor_md", "This is some updated test content"],
]

describe("Blog post updates", () => {
  before(() => {
    cy.loginToAuth0().then(() => {
      cy.contains("Admin").should("be.visible")
    })
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit("blog")
  })

  afterEach(() => {
    cy.saveLocalStorage()
  })

  it("Edit a post", () => {
    cy.get('[data-test-id="blog-featured-post-item"]').first().click()
    cy.get('[data-test-id="blog-post-edit-btn"]').click()
    cy.get('[data-test-id="blog-post-edit-modal"]').should("be.visible")

    cy.get('[data-test-id="blog-edit-form-toggle"]').click()
    fields.forEach(([selector, value]) => {
      value.length > 0 && cy.get(selector).first().clear().type(value)
    })
    cy.get('[data-test-id="update-post-btn"]').click()
    cy.get('[data-test-id="blog-post-edit-modal"]').should("not.exist")

    // can still navigate to previous post
    cy.get('[data-test-id="nav-prev"]').click()
    cy.url().should(
      "not.eq",
      Cypress.config().baseUrl + "/admin/blog/" + fields[1][1]
    )
    cy.url().should("not.eq", Cypress.config().baseUrl + "/404")
  })

  it("Like and reset post likes", () => {
    cy.get('[data-test-id="blog-featured-post-item"]').first().click()
    cy.get('[data-test-id="blog-post-like"]').first().click()

    cy.reload()
    cy.get('[data-test-id="blog-post-like"]')
      .first()
      .should("include.text", "1")

    cy.get('[data-test-id="blog-post-edit-btn"]').click()
    cy.get('[data-test-id="reset-likes-btn"]').click()
    cy.get("button.close").click()
    cy.reload()

    cy.get('[data-test-id="blog-post-like"]')
      .first()
      .should("include.text", "0")
  })

  it("Delete post from edit menu", () => {
    let initialPosts = 0
    cy.get(".blog-post")
      .its("length")
      .then(count => {
        initialPosts = count
        cy.get('[data-test-id="blog-featured-post-item"]').first().click()
        cy.get('[data-test-id="blog-post-edit-btn"]').click()
        cy.get('[data-test-id="blog-post-delete-btn"]').click()
        cy.url().should("eq", Cypress.config().baseUrl + "/blog")
        cy.get(".blog-post").should("have.length", initialPosts - 1)
      })
  })

  it("Delete post from blog page", () => {
    let initialPosts = 0
    cy.get(".blog-post")
      .its("length")
      .then(count => {
        initialPosts = count
        cy.get('[data-test-id="blog-post-delete-btn"]').first().click()
        cy.url().should("eq", Cypress.config().baseUrl + "/blog")
        cy.get(".blog-post").should("have.length", initialPosts - 1)
      })
  })
})
