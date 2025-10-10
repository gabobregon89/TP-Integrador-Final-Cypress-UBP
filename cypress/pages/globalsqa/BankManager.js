class BankManagerPage {
    elements = {
        addCustBtn: () => cy.get('[ng-class="btnClass1"]'),
        openAccBtn: () => cy.get('[ng-class="btnClass2"]'),
        customersBtn: () => cy.get('[ng-class="btnClass3"]')   
    }

    clickAddCustomer() {
        this.elements.addCustBtn().click();
    }

    clickOpenAccount() {
        this.elements.openAccBtn().click();
    }

    clickCustomers() {
        this.elements.customersBtn().click();
    }

}

export default new BankManagerPage();