describe("Form - testing our form inputs", function () {
  // they cypress will reload this webpage each and every time it runs a test.
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  // test that you can add text to the box
  it("adds text to textarea", () => {
    cy.get("textarea").type("hi there");
  });
});

// test that you can select multiple toppings
it("test the checkboxes", function () {
  // uses type attribute to find element. not recommended. will break if multiple checkboxes in form.
  cy.get('input[name="pepperoni"]').check().should("be.checked");
  cy.get("[data-cy=submit]").click();
});

// test that you can submit the form
it("test the order button", function () {
  cy.get("[data-cy=submit]").click();
});
