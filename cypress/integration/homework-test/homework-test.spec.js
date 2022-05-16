import SelectablesPage from '../../pageObjects/SelectablesPage'

context("Selectables page", () => {
  context("Selectabled scenarios", () => {
    beforeEach(() => {
      SelectablesPage.visit();
    });

    it('Test list selectables', () => {
        // TODO: Click on items at the list and validate active ones
        // - Click on Cras justo odio and morbi leo risus list items
        // - Validate that those two items are active
        // - Validate that other items are not active
        SelectablesPage.listItem.contains('Cras justo odio').click()
        SelectablesPage.listItem.contains('Morbi leo risus').click()
        SelectablesPage.listItem.contains('Cras justo odio').invoke('attr', 'class').should('include', 'active')
        SelectablesPage.listItem.contains('Morbi leo risus').invoke('attr', 'class').should('include', 'active')
        SelectablesPage.listItem.contains('Dapibus ac facilisis in').not('have.class', 'active')
        SelectablesPage.listItem.contains('Porta ac consectetur ac').not('have.class', 'active')
    })

    it('Test grid selectables', () => {
        // TODO: Click on grid items and validate them
        // - Open grid Tab
        // - Click on items Two, Four, Six and Eight
        // - Validate that those items are active
        // - Validate that other items havent changed and are not active
        SelectablesPage.gridTab.click()
        SelectablesPage.listItem.contains('Two').click()
        SelectablesPage.listItem.contains('Four').click()
        SelectablesPage.listItem.contains('Six').click()
        SelectablesPage.listItem.contains('Eight').click()
        SelectablesPage.listItem.contains('Two').invoke('attr', 'class').should('include', 'active')
        SelectablesPage.listItem.contains('Four').invoke('attr', 'class').should('include', 'active')
        SelectablesPage.listItem.contains('Six').invoke('attr', 'class').should('include', 'active')
        SelectablesPage.listItem.contains('Eight').invoke('attr', 'class').should('include', 'active')
        SelectablesPage.listItem.contains('One').not('have.class', 'active')
        SelectablesPage.listItem.contains('Three').not('have.class', 'active')
        SelectablesPage.listItem.contains('Five').not('have.class', 'active')
        SelectablesPage.listItem.contains('Seven').not('have.class', 'active')
        SelectablesPage.listItem.contains('Nine').not('have.class', 'active')
    })
  });
});