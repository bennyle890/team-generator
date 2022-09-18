const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return role;
    }
};

const role = 'Intern';

module.exports = Intern;