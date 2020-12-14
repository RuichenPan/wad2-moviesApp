let movies;    // List of movies from TMDB
let movie_id=531219;
// Utility functions

describe("Recommend Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${Cypress.env(
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
    cy.contains("Favorite").click()
    cy.url().should("include", `login`);
    cy.get(".mx-auto").eq(1).get("input").eq(0).click().type("abc@qq.com")
    cy.get(".mx-auto").eq(1).get("input").eq(1).click().type("123321")
    cy.get(".mx-auto").get("button").click()
    cy.contains("Home").click()
    cy.contains("Upcoming").click()
    cy.get(".card").get(".btn-primary").eq(0).click();
    cy.contains("Watch List").click()
    cy.get(".card").contains("Recommend").click();
  });

  describe("Base tests", () => {
    it("displays page header", () => {
      cy.get("h2").contains("Recommend Movies");
    });
  });
//   describe("Button test", () => {
//     it("button should add movies to watch list", () => {
//       cy.get(".card").get(".btn-primary").eq(0).click();
//       cy.get(".card").should("have.length",2);
//     });
    
//   });
});