const Employee = require('../lib/Employee');


const name = 'Lauren';
const id = 'hello';
const email ='email@email.com';

const e = new Employee(name, id, email);

test('create an employee object', () => expect(typeof(e)).toBe('object'))

test('create an employee name', () => expect(e.getName()).toBe(name))

test('create an employee email', () => expect(e.getEmail()).toBe(email))

test('create an employee id', () => expect(e.getId()).toBe(id))

test('create an employee role', () => expect(e.getRole()).toBe('Employee'))