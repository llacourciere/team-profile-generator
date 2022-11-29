const questions = [
    {
        type: 'confirm',
        name: 'needEmployee',
        message: 'Would you like to add an employee?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter the Employee Name',
        when: ({needEmployee})=>needEmployee
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the Employee email',
        when: ({needEmployee})=>needEmployee
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Employee id',
        when: ({needEmployee})=>needEmployee
    },
    {
        type: 'list',
        name: 'role',
        message: 'What position would you like to fill?',
        choices: ['Manager', 'Engineer', 'Intern'],
        when: ({needEmployee})=>needEmployee
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the Managers office number',
        when: (input) => input.role === 'Manager'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter the Engineers gitHub',
        when: (input) => input.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'getSchool',
        message: 'Enter the Interns school',
        when: (input) => input.role === 'Intern'
    },
]

module.exports = questions;