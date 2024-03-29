describe("Blog Nav", () => {
  beforeEach(() => {
    cy.intercept("GET", Cypress.env("API_URL") + "/api/posts", req => {
      delete req.headers["if-none-match"]
    }).as("allPosts")
    cy.visit("blog")
  })

  it("fetch blog posts", () => {
    cy.get('[data-test-id="blog-featured-post-item"]').should("have.length", 3)
    cy.get('[data-test-id="blog-post-item"]').should("have.length", 1)

    cy.get('[data-test-id="blog-featured-post-item"]')
      .first()
      .contains("Latest")
  })

  it("navigate to and from blog posts", () => {
    cy.wait("@allPosts").then(interception => {
      const posts = interception.response.body.reverse()

      const checkPrevBtn = () =>
        cy.get('[data-test-id="nav-prev"]').then($el => {
          cy.wrap($el).should("include.text", "Older")
          cy.wrap($el).should("be.visible")
          cy.getScreenWidth().then(screenWidth => {
            const leftPosition = $el.offset().left
            expect(leftPosition).to.be.greaterThan(screenWidth / 2)
          })
        })

      const checkNextBtn = () =>
        cy.get('[data-test-id="nav-next"]').then($el => {
          cy.wrap($el).should("include.text", "Newer")
          cy.wrap($el).should("be.visible")
          cy.getScreenWidth().then(screenWidth => {
            const leftPosition = $el.offset().left
            expect(leftPosition).to.be.lessThan(screenWidth / 2)
          })
        })

      // most recent blog post
      cy.get('[data-test-id="blog-featured-post-item"]').first().click()
      cy.url().should("include", "/blog/" + posts[0].slug)
      checkPrevBtn()
      cy.get('[data-test-id="nav-next"]').should("not.exist")

      // back to blog home
      cy.get('[data-test-id="blog-back-btn"]').click()
      cy.url().should("eq", Cypress.config().baseUrl + "/blog")

      // 2nd most recent post
      cy.get('[data-test-id="blog-featured-post-item"]').eq(1).click()
      cy.url().should("include", "/blog/" + posts[1].slug)
      checkPrevBtn()
      checkNextBtn()

      // back to blog home
      cy.get('[data-test-id="blog-back-btn"]').click()
      cy.url().should("eq", Cypress.config().baseUrl + "/blog")

      // least recent post
      cy.get('[data-test-id="blog-post-item"]').click()
      cy.url().should("include", "/blog/" + posts[3].slug)
      checkNextBtn()
      cy.get('[data-test-id="nav-prev"]').should("not.exist")
    })
  })

  it("blog post --> subscribe page", () => {
    cy.get('[data-test-id="blog-featured-post-item"]').first().click()
    cy.get('[data-test-id="blog-post-subscribe"]').first().click()
    cy.url().should("eq", Cypress.config().baseUrl + "/subscribe")
  })
})
