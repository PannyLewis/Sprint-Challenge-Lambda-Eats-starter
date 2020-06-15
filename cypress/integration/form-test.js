describe("Form - testing our form inputs", function () {
  // cypress will reload this webpage each and every time it runs a test.
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  //   The order button is disabled until all form field are filled so in order to enable the button, all the other field must be filled, therefore a test must be run for each empty field.

  it("testing the order button", () => {
    // test name input
    cy.get('input[name="name"]').type("Panny").should("have.value", "Panny");

    // there is no need to test the select size options because it is not blank.

    // test that you can select multiple toppings
    cy.get("[type=checkbox]").check().should("be.checked");

    // test that you can add text to the box
    cy.get("textarea").type("hi there");

    // test that you can submit the form
    cy.get("[data-cy=order]").click();
  });
});
