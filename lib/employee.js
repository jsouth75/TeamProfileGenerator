class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    getName() {
        return this.name
    }
    
    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

const Employee = new Employee (Jason South, 7, jason.south@me.com)
console.log(this.name);

module.exports = Employee