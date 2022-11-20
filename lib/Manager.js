const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }
    getOfficeNumber = () => this.officenumber;
    getRole = () => 'Manager';
}

module.exports = Manager;