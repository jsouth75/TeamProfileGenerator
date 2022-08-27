const Intern = require("../lib/intern")
const intern = new Intern('Jason', 7, 'jason@gmail.com', 'Georgia Tech');

test('Make sure that what I create is an object', ()=> {
    const testSubject = new Intern()
    expect(typeof testSubject).toBe("object")
});

test('constructor values for an Intern', () => {
    expect(intern.name).toBe('Jason');
    expect(intern.id).toBe(7);
    expect(intern.email).toBe('jason@gmail.com');
    expect(intern.school).toBe('Georgia Tech');
});

test('get value from getSchool()', ()=> {
    expect(intern.getSchool()).toBe('Georgia Tech');
});

test('get value from getRole()', ()=> {
    expect(intern.getRole()).toBe('Intern');
});