import BasePage from "./BasePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get fullNameInputField() {
    return cy.get("#userName");
  }

  static get emailInputField() {
    return cy.get("#userEmail");
  }

  static get currentAddressInputField() {
    return cy.get("#currentAddress");
  }

  static get permanentAddressInputField() {
    return cy.get("#permanentAddress");
  }

  static get submitbutton() {
    return cy.get("#submit");
  }

  static get nameresult() {
    return cy.get("#name");
  }

  static get emailresult() {
    return cy.get("#email");
  }

  static get currentAddressResult() {
    return cy.get("p[id='currentAddress']");
  }

  static get permanentAddressResult() {
    return cy.get("p[id='permanentAddress']");
  }
}

export default TextBoxPage;
