/// <reference types="cypress" />

describe("Testing google's answer to wormhole", () => {
  it("should refer to an einstein-rosen bridge", () => {
    cy.visit("https://duckduckgo.com/");

    cy.get('#searchbox_input').type("Einstein-Rosen Bridge{enter}");

    cy.get('#sa_5003 > .sa_tm > span > strong').click()

    cy.get(':nth-child(2) > [data-testid="result"] > .ikg2IXiCD14iVX7AdZo1 > .LnpumSThxEWMIsDdAT17 > [data-testid="result-title-a"] > .EKtkFWMYpwzMKOYr0GYm').should("have.text","Wormhole")
  });
});
