import { fakerES as faker} from '@faker-js/faker';

class DataGenerator {
    constructor() {
        this.faker = faker;
    }

    getFisrtName() {
        return this.faker.name.firstName();
    }

    getLastName() {
        return this.faker.name.lastName();
    } 

    getFullName() {
        return this.faker.name.fullName();
    }

    gezipCode() {
        return this.faker.address.zipCode();
    }

}

export default new DataGenerator();