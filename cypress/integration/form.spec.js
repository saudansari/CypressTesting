describe("From Test", () => {
  it("Can fill the form", () => {
    console.log(Cypress.spec);
    //console.log("Hello World");
    cy.visit("/");
    cy.get("form");
    cy.get('input[name="name"]').type("Molly").should("have.value", "Molly");
    cy.get('input[name="email"]')
      .type("molly@dev.dev")
      .should("have.value", "molly@dev.dev");
    cy.get("textarea")
      .type("Mind you if I ask some silly question?")
      .should("have.value", "Mind you if I ask some silly question?");

    cy.server();
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Saved", code: 201 },
    });

    cy.get("form").submit();
    cy.contains("Saved");
  });

  // it("Can fill the form (Stubbing)", () => {
  //   cy.visit("/");
  //   cy.get("form");

  //   cy.server();
  //   cy.route({
  //     url: "/users/**",
  //     method: "POST",
  //     response: { status: "Saved", code: 201 },
  //   });

  //   cy.get("form").submit();
  //   cy.contains("Saved");
  // });
});
