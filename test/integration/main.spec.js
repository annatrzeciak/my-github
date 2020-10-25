describe("Main page", () => {
  it("Main page - show main page", () => {
    cy.visit("/")
    cy.get("h1")
      .should("have.length", 1)
      .should("contain", "Welcome to the my github app")
  })

  it("Main page - show authorize form", () => {
    cy.visit("/")
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.get("button")
      .should("have.length", 1)
      .should("contain", "Authorize by Github")
  })

  it("Main page - redirect from search to main if user is unauthorized", () => {
    cy.visit("/search")
    cy.get("h1")
      .should("have.length", 1)
      .should("contain", "Welcome to the my github app")
  })
})
