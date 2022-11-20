const {questions} = require('./lib');
const {prompt} = require('inquirer');

prompt(questions).then(console.log);
