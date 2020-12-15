let movies;
const movieId = 590706; // Enola Holmes movie id
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.contains("Favorite").click()
      cy.wait(5000)
      cy.url().should("include", `login`);
      cy.get(".mx-auto").eq(1).get("input").eq(0).click().type("abc@qq.com")
      cy.get(".mx-auto").eq(1).get("input").eq(1).click().type("123321")
      cy.get(".mx-auto").get("button").eq(1).click()
      cy.contains("Home").click()
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("li").eq(4).find("a").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(4).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("All Movies");
    });
  });
  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.contains("Favorite").click()
      cy.url().should("include", `login`);
      cy.get(".mx-auto").eq(1).get("input").eq(0).click().type("abc@qq.com")
      cy.get(".mx-auto").eq(1).get("input").eq(1).click().type("123321")
      cy.get(".mx-auto").get("button").eq(1).click()
      cy.contains("Home").click()
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(4).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.wait(1000);
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.contains("Favorite").click()
      cy.url().should("include", `login`);
      cy.get(".mx-auto").eq(1).get("input").eq(0).click().type("abc@qq.com")
      cy.get(".mx-auto").eq(1).get("input").eq(1).click().type("123321")
      cy.get(".mx-auto").get("button").eq(1).click()
      cy.contains("Home").click()
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.wait(1000);
      cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("All Movies");
    });
    it("should navigate from favorites page to movie details and back", () => {
        cy.get(".card").eq(0).find("button").click();
        cy.get("nav").find("li").eq(4).find("a").click();
        cy.get(".card").eq(0).find("img").click();
        cy.wait(1000);
        cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
        cy.url().should("include", `/movies`);
        cy.get("h2").contains("Favorite Movies");
    });
  });
});