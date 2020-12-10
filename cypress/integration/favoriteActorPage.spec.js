let actors;    


describe("Favorite Actors Page ", () => {
  before(() => {
    
    cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&page=1`
    )
      .its("body")    
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
      cy.contains("Favorite Actors").click()
      cy.get("h2").contains("Favorite Actors");
    });
  });
  describe("Button test", () => {
    it("button should add movies to favorite actors page", () => {
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.contains("Favorite Actors").click()
      cy.get(".card").should("have.length",1);
    });
    it("button should remove movies from favorite actors page", () => {
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.contains("Favorite Actors").click()
      cy.get(".card").get(".btn-primary").eq(0).click();
      cy.get(".card").should("have.length",0);
    });
    it("button should remove movies from favorite actors page", () => {
      cy.get(".card").get(".btn-primary").eq(3).click();
      cy.contains("Favorite Actors").click()
      cy.get(".card").get(".btn-primary").eq(0).click();
      cy.contains("Popular Actors").click()
      cy.get(".card").should("have.length",actors.length);
    });
    
  });
});