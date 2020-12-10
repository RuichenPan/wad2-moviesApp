let movies;    // List of movies from TMDB
// Utility functions

describe("Watch List Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/")
    cy.contains("Upcoming").click()
  });

  describe("Base tests", () => {
    it("displays page header", () => {
      cy.contains("Watch List").click()
      cy.get("h2").contains("Watch List Movies");
    });
  });
  describe("Button test", () => {
    it("button should add movies to watch list page", () => {
      cy.get(".card").should("have.length",0);
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.contains("Watch List").click()
      cy.get(".card").should("have.length",1);
    });
    
  });
});