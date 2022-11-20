const {Engineer} = require('../lib');


const name = 'Lauren';
const id = 'hello';
const email ='email@email.com';
const gitHub = 'llacourciere'
 
const e = new Engineer(name, id, email, gitHub);

test('get an engineers github link method', ()=> expect(e.getGithub()).toBe(gitHub));
test('get an employee object', () => expect(e.getRole()).toBe('Engineer'));