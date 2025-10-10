class InicioPage {
    elements = {
        homeBtn: () => cy.get('.home'),
        custLogBtn: () => cy.get('.borderM > :nth-child(1) > .btn'),
        bankManBtn: () => cy.get(':nth-child(3) > .btn')
    }

    clickHome() {
        this.elements.homeBtn().click();
    }

    clickCustomerLogin() {
        this.elements.custLogBtn().click();
    }

    clickBankManagerLogin() {
        this.elements.bankManBtn().click();
    }
    
}

export default new InicioPage();