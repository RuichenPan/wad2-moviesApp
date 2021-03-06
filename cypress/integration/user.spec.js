let user;   


  beforeEach(() => {
    cy.visit("/")
  });

  describe("Base tests", () => {
    it("not display favorite page before login", () => {
      cy.contains("Favorite").click()
      cy.url().should("include", `login`);
      cy.get(".mx-auto").eq(1).get("input").eq(0).click().type("abc@qq.com")
      cy.get(".mx-auto").eq(1).get("input").eq(1).click().type("123321")
      cy.get(".mx-auto").get("button").eq(1).click()
      cy.contains("Favorites").click()
      cy.wait(5000);
      cy.contains("Favorites").click()
      cy.url().should("include", `/movies/favorites`);
    });
    it("not display favorite page after logout", () => {
      cy.contains("Favorite").click()
      cy.url().should("include", `login`);
      cy.get(".mx-auto").eq(1).get("input").eq(0).click().type("abc@qq.com")
      cy.get(".mx-auto").eq(1).get("input").eq(1).click().type("123321")
      cy.get(".mx-auto").get("button").eq(1).click()
      cy.contains("Favorites").click()
      cy.url().should("include", `favorites`);
      cy.get("button").click();
      cy.contains("Favorite").click()
      cy.wait(5000)
      cy.contains("Favorite").click()
    });
  });

