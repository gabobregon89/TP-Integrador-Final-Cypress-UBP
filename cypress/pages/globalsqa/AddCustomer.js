class AddCustomerPage {
    elements = {
        firstNameInput: () => cy.get(':nth-child(1) > .form-control'),
        lastNameInput: () => cy.get(':nth-child(2) > .form-control'),
        postCodeInput: () => cy.get(':nth-child(3) > .form-control'),
        submitBtn: () => cy.get('[name="myForm"] > .btn')
    }

    enterFirstName(name) {
        this.elements.firstNameInput().type(name);
    }

    enterLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    enterPostCode(postCode) {
        this.elements.postCodeInput().type(postCode);
    }

    clickSubmit() {
        this.elements.submitBtn().click();
    }
    
}

export default new AddCustomerPage();