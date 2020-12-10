let movies;    // List of movies from TMDB
let movie_id=278;
// Utility functions

describe("Similar Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${Cypress.env(
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
    cy.contains("Top Rated").click()
  });

  describe("Base tests", () => {
    it("displays page header", () => {
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.get("h2").contains("Similar Movies");
    });
  });
  describe("Button test", () => {
    it("button should link to similar page", () => {
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.url().should("include", `movies/similarMovie/${movie_id}`);
    });
    
  });
  describe("Test empty page and non-empty page", () => {
    describe("test page with two conditions" ,() => {
      it("should display empty movie page", () => {
        cy.get(".card").get(".btn-primary").eq(0).click();
        cy.get(".card").should("have.length",0);
      })
      it("should display movies", () => {
        cy.get(".card").get(".btn-primary").eq(3).click();
        cy.get(".card").should("have.length",movies.length);
      })
    })
  })
});