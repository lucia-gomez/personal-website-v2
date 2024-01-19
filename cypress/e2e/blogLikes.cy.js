describe("Blog Likes", () => {
  beforeEach(() => {
    cy.intercept("GET", Cypress.env("API_URL") + "/api/posts", req => {
      delete req.headers["if-none-match"]
    }).as("allPosts")
    cy.intercept("PUT", Cypress.env("API_URL") + "/api/posts/likes").as(
      "likesResponse"
    )
    cy.visit("blog")
  })

  it("like a post", () => {
    cy.get('[data-test-id="blog-post-like"]').first().click()
    cy.wait("@likesResponse").then(interception => {
      const res = interception.response.body
      expect(res.matchedCount).to.equal(1)
      cy.get('[data-test-id="blog-post-like"]')
        .first()
        .should("include.text", "1")
        .find("i")
        .should("have.class", "fas") // filled-in heart icon
      cy.reload()
      cy.get('[data-test-id="blog-post-like"]')
        .first()
        .should("include.text", "1")
        .find("i")
        .should("have.class", "far") // outlined heart icon
    })
  })

  it("unlike a post", () => {
    cy.get('[data-test-id="blog-post-like"]').first().click()
    cy.wait("@likesResponse").then(interception => {
      const res = interception.response.body
      expect(res.matchedCount).to.equal(1)
      cy.get('[data-test-id="blog-post-like"]')
        .first()
        .should("include.text", "2")
        .find("i")
        .should("have.class", "fas") // filled-in heart icon

      // click again to unlike
      cy.get('[data-test-id="blog-post-like"]').first().click()
      cy.wait("@likesResponse").then(interception2 => {
        const res2 = interception2.response.body
        expect(res2.matchedCount).to.equal(1)
        cy.get('[data-test-id="blog-post-like"]')
          .first()
          .should("include.text", "1")
          .find("i")
          .should("have.class", "far") // outlined heart icon
        cy.reload()
        cy.get('[data-test-id="blog-post-like"]')
          .first()
          .should("include.text", "1")
          .find("i")
          .should("have.class", "far") // outlined heart icon
      })
    })
  })
})
