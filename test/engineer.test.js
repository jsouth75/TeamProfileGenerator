const Engineer = require("../lib/engineer")
const engineer = new Engineer('Jason', 7, 'jason@gmail.com', 'jsouth75');

test('Make sure that what I create is an object', ()=> {
    const testSubject = new Engineer()
    expect(typeof testSubject).toBe("object")
});

test('constructor values for an Intern', () => {
    expect(engineer.name).toBe('Jason');
    expect(engineer.id).toBe(7);
    expect(engineer.email).toBe('jason@gmail.com');
    expect(engineer.github).toBe('jsouth75');
});

test('get value from GitHub()', ()=> {
    expect(engineer.gitHub()).toBe('jsouth75');
});

test('get value from getRole()', ()=> {
    expect(engineer.getRole()).toBe('Engineer');
});
