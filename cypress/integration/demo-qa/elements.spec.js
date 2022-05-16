import TextBoxPage from "../../pageObjects/textBoxPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      
      TextBoxPage.fullNameInputField.type('Kleimans Hirseins')
      TextBoxPage.emailInputField.type('kleimanshirseins@capymail.cb')
      TextBoxPage.currentAddressInputField.type('Saules iela 24, Cēsis, LV4101')
      TextBoxPage.permanentAddressInputField.type('Brīvības iela 18, Rīga, LV1002')
      TextBoxPage.submitbutton.click()
      TextBoxPage.nameresult.should('contain.text', 'Kleimans Hirseins')
      TextBoxPage.emailresult.should('contain.text', 'kleimanshirseins@capymail.cb')
      TextBoxPage.currentAddressResult.should('contain.text', 'Saules iela 24, Cēsis, LV4101')
      TextBoxPage.permanentAddressResult.should('contain.text', 'Brīvības iela 18, Rīga, LV1002')
    });
  });
});
