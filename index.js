const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('.lib/Engineer.js');
const inquirer = require ('inquirer');
const fs = require('fs');

const employees = [];

function ask() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Select Employee Type',
            name: 'type',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            message: 'What is their name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is their ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is their office number?',
            name: 'officeNumber',
            when: (answers) => answers.type === 'Manager'
        },
        {
            type: 'input',
            message: 'What is their GitHub username?',
            name: 'github',
            when: (ansers) => answers.type === 'Engineer'
        },
        {
            type: 'input',
            message: 'What is the name of their school?',
            name: 'school',
            when: (answers) => answers.type === 'Intern'
        },
        {
            type: 'list',
            message: 'Would you like to add another employee?',
            name: 'addEmployee',
            choices: [
                'Yes',
                'No'
            ]
        }
    ])
}

.then(answers => {
    
}) 