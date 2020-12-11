let actors;    // List of movies from TMDB

// Utility functions

describe("Popular Actors Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        actors = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/")
    cy.contains("Popular Actors").click()
  });

  describe("Base tests", () => {
    it("displays page header", () => {
      cy.get("h2").contains("Popular People");
      cy.get(".badge").contains(20);
    });
  });
  describe("Button test", () => {
    it("button should add movies to I Like page", () => {
      cy.get(".card").get(".btn-primary").eq(2).click();
      cy.get(".card").get(".btn-primary").eq(4).click();
      cy.get(".card").should("have.length",18);
    });
    
  });

});