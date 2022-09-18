const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
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
            when: (answers) => answers.type === 'Engineer'
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


    .then(answers => {
        if (answers.type === 'Manager') {
         const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
         employees.push(manager);
        } else if (answers.type === 'Engineer') {
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          employees.push(engineer);
        } else if (answers.type === 'Intern') {
          const intern = new Intern(answers.name, answers.id, answers. email, answers.school);
          employees.push(intern);
        }

        if (answers.addEmployee === 'Yes') {
          ask();
        } else {
          console.log(JSON.stringify(employees, null, 2));
          fs.writeFile(outputPath, render(employees), function(eer) {
            
              if (err) {
                  return console.log(err);
               }

                console.log('New HTML document created!');
            });
        }
    })
};

ask();