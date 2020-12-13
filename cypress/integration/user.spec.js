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
      cy.get(".mx-auto").get("button").click()
      cy.contains("Favorites").click()
      cy.wait(5000);
      cy.url().should("include", `/movies/favorites`);
    });
    it("not display favorite page after logout", () => {
      cy.contains("Favorite").click()
      cy.url().should("include", `login`);
      cy.get(".mx-auto").eq(1).get("input").eq(0).click().type("abc@qq.com")
      cy.get(".mx-auto").eq(1).get("input").eq(1).click().type("123321")
      cy.get(".mx-auto").get("button").click()
      cy.contains("Favorites").click()
      cy.get(".ant-dropdown-trigger").trigger("mouseover").get("button").click();//Logout
      cy.contains("Favorite").click()
      cy.url().should("include", `login`);
    });
  });
  describe("Base tests", () => {
    it("should sign up an account successfully", () => {
      cy.contains("Favorite").click()
      cy.get(".ant-dropdown-trigger").trigger("mouseover").get("button").click();//Logout
      cy.get(".nav-link").contains("Sign").click()
      const userName = Math.random();
      cy.get("input").eq(0).type(userName)
      cy.get("input").eq(1).type(userName + "@gmail.com")
      cy.get("input").eq(2).type("123321")
      cy.get("button").eq(0).click()
      cy.contains("Favorite").click()
      cy.url().should("include", `login`);
      cy.get(".mx-auto").eq(1).get("input").eq(0).click().type(userName + "@gmail.com")
      cy.get(".mx-auto").eq(1).get("input").eq(1).click().type("123321")
      cy.get(".mx-auto").get("button").eq(0).click()
      cy.contains("Favorites").click()
      cy.wait(5000);
      cy.contains("Favorites").click()
      cy.url().should("include", `/movies/favorites`);
    });
  });
