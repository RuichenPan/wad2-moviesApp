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
      cy.contains("Favorite").click()
      cy.url().should("include", `login`);
      cy.get(".mx-auto").eq(1).get("input").eq(0).click().type("abc@qq.com")
      cy.get(".mx-auto").eq(1).get("input").eq(1).click().type("123321")
      cy.get(".mx-auto").get("button").click()
  });

  describe("Base tests", () => {
    it("displays page header", () => {
      cy.wait(5000)
      cy.contains("Favorite Actors").click()
      cy.wait(5000)
      cy.get("h2").contains("Favorite Actors");
    });
  });
  describe("Button test", () => {
    it("button should add movies to favorite actors page", () => {
      cy.contains("Popular Actors").click()
      cy.get(".card").get(".btn-primary").eq(2).click();
      cy.contains("Favorite Actors").click()
      cy.get(".card").should("have.length",1);
    });
    it("button should remove actors from favorite actors page", () => {
      cy.contains("Popular Actors").click()
      cy.get(".card").get(".btn-primary").eq(2).click();
      cy.contains("Favorite Actors").click()
      cy.get(".card").get(".btn-primary").eq(0).click();
      cy.get(".card").should("have.length",0);
    });
    it("button should remove actors from favorite actors page and then add again", () => {
      cy.contains("Popular Actors").click()
      cy.get(".card").get(".btn-primary").eq(2).click();
      cy.contains("Favorite Actors").click()
      cy.get(".card").get(".btn-primary").eq(0).click();
      cy.contains("Popular Actors").click()
      cy.get(".card").should("have.length",actors.length);
    });
    
  });
});