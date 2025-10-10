class CustomerPage {
    elements = {
        useSelect: () => cy.get('[name="userSelect"]'),
        loginBtn: () => cy.get('[name="myForm"] > .btn'),
        welcomeMsg: () => cy.get('.borderM > :nth-child(1)'),
        logoutBtn: () => cy.get('.logout')
    }

    selectCustomer(cliente) {
        this.elements.useSelect().select(cliente);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }
}

export default new CustomerPage();