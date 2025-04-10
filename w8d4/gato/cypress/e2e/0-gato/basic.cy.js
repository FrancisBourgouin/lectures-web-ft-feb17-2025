/// <reference types="cypress" />


describe("Basic Gato functionality", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should show the home page with the header and the form", () => {
    cy.get("header h1").should("exist")
    cy.get("form.GameForm").should("exist")
    cy.get("section.Game").should("not.exist")
  })

  it("should switch to the game mode once the form is completed", () => {

    cy.get("form.GameForm").find("input:first-of-type").type("Herménégilde")
    cy.get("form.GameForm").find("input:last-of-type").type("Gontran")

    cy.get("form.GameForm button").click()

    cy.get("section.Game").should("exist")
    cy.get("form.GameForm").should("not.exist")
  })
})