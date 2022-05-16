import BasePage from "./BasePage";

class SelectablesPage extends BasePage{
    static get url(){
        return '/selectable'
    }

    static get listItem(){
        return cy.get('.list-group-item') 
    }

    static get gridTab(){
        return cy.get('#demo-tab-grid')
    }
}

export default SelectablesPage