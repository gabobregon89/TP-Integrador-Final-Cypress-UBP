class AccountPage {
    elements = {
        transBtn: () => cy.get('[ng-class="btnClass1"]'),
        depositBtn: () => cy.get('[ng-class="btnClass2"]'),
        withdrawBtn: () => cy.get('[ng-class="btnClass3"]')
    }

    clickTrans() {
        this.elements.transBtn().click();
    }

    clickDeposit() {
        this.elements.depositBtn().click();
    }

    clickWithdraw() {
        this.elements.withdrawBtn().click();
    }
    
}

export default new AccountPage();