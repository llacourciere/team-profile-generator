const questions = [
    {
        type: 'confirm',
        name: 'needEmployee',
        message: 'Would you like to add an employee?'
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
]

module.exports = questions;