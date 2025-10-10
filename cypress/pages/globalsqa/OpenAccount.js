class OpenAccountPage {
    elements = {
        customerSelect: () => cy.get('[name="userSelect"]'),
        currencySelect: () => cy.get('[name="currency"]'),
        processBtn: () => cy.get('form[name="myForm"] > button')
    }

    clickProcess() {
        this.elements.processBtn().click();
    }

}

export default new OpenAccountPage();