/// <reference types="cypress" />

describe("Basic Gato functionality", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("header h1").should("exist")
    cy.get("form.GameForm").find("input:first-of-type").type("Herménégilde")
    cy.get("form.GameForm").find("input:last-of-type").type("Gontran")

    cy.get("form.GameForm button").click()
  });

  it("should be possible to click on a tile and alternate between players", () => {
    cy.get(".Game div button:nth-of-type(1)").click()
    cy.get(".Game div button:nth-of-type(1)").should("have.text", "M")

    cy.get(".Game div button:nth-of-type(2)").click()
    cy.get(".Game div button:nth-of-type(2)").should("have.text", "B")


  });

  it("should be possible to see the winner once the match ends", () => {
    cy.get(".Game div button:nth-of-type(1)").click()
    cy.get(".Game div button:nth-of-type(4)").click()
    cy.get(".Game div button:nth-of-type(2)").click()
    cy.get(".Game div button:nth-of-type(5)").click()
    cy.get(".Game div button:nth-of-type(3)").click()

    cy.contains("WON")
  });

  it("should be possible to restart the match once finished", () => {
    cy.get(".Game div button:nth-of-type(1)").click()
    cy.get(".Game div button:nth-of-type(4)").click()
    cy.get(".Game div button:nth-of-type(2)").click()
    cy.get(".Game div button:nth-of-type(5)").click()
    cy.get(".Game div button:nth-of-type(3)").click()

    cy.get("button").click()

    cy.contains("It's player1 turn to play")
  });

  it("should be able to show the number of wins per player", () => {
    cy.get(".Game div button:nth-of-type(1)").click()
    cy.get(".Game div button:nth-of-type(4)").click()
    cy.get(".Game div button:nth-of-type(2)").click()
    cy.get(".Game div button:nth-of-type(5)").click()
    cy.get(".Game div button:nth-of-type(3)").click()

    cy.contains("Player1: 1 win")
  });
});
