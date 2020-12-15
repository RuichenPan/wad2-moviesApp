let actors;    // List of movies from TMDB

// Utility functions

describe("Actor Review Page ", () => {
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

  describe("Text test", () => {
    it("Author input", () => {
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.get(".form-control").eq(0).type("Ruichen Pan");
      cy.get(".form-control").eq(0).should("have.length",1);
    });
    it("empty author input", () => {
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.get("button").eq(2).click();
      cy.get("p").eq(0).contains("Author name required");
      });
    it("empty review input", () => {
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.get("button").eq(2).click();
      cy.get("p").eq(1).contains("No review text");
    });
    it("not enough review input", () => {
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.get(".form-control").eq(1).type("good");
      cy.get("button").eq(2).click();
      cy.get("p").eq(1).contains("Review is too short");
    });
    
  });

});