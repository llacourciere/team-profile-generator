const {Manager} = require('../lib');


const name = 'Lauren';
const id = 'hello';
const email ='email@email.com';
const officeNumber = 'llacourciere'
 
const e = new Manager(name, id, email, officeNumber);

test('get an Managers Office number method', ()=> expect(e.getOfficeNumber()).toBe(officeNumber));
test('get an employee role', () => expect(e.getRole()).toBe('Manager'));