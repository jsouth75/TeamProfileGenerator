const Employee = require("../lib/employee")
const employee = new Employee('Jason', 7, 'jason@gmail.com');


test('Make sure that what I create is an object', ()=> {
    const testSubject = new Employee()
    expect(typeof (testSubject)).toBe("object")
});

test('constructor values for an Employee', () => {
    expect(employee.name).toBe('Jason');
    expect(employee.id).toBe(7);
    expect(employee.email).toBe('jason@gmail.com');
});

test('get value from getName()', ()=> {
    expect(employee.getName()).toBe('Jason');
});

test('get value from getId()', ()=> {
    expect(employee.getId()).toBe(7);
});

test('get value from getEmail()', ()=> {
    expect(employee.getEmail()).toBe('jason@gmail.com');
});

test('get value from getRole()', ()=> {
    expect(employee.getRole()).toBe('Employee');
});