const {Intern} = require('../lib');


const name = 'Lauren';
const id = 'hello';
const email ='email@email.com';
const school = 'llacourciere'
 
const e = new Intern(name, id, email, school);

test('get an interns school name method', ()=> expect(e.getSchool()).toBe(school));
test('get an employee role', () => expect(e.getRole()).toBe('Intern'));