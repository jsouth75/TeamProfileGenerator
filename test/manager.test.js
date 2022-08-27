const Manager = require("../lib/manager");
const manager = new Manager('Jason', 7, 'jason@gmail.com', 16);

test('Make sure that what I create is an object', ()=> {
    const testSubject = new Manager()
    expect(typeof testSubject).toBe("object")
});

test('constructor values for an Manager', () => {
    expect(manager.name).toBe('Jason');
    expect(manager.id).toBe(7);
    expect(manager.email).toBe('jason@gmail.com');
    expect(manager.officeNumber).toBe(16);
});

test('get value from getOffice()', ()=> {
    expect(manager.getOffice()).toBe(16);
});

test('get value from getRole()', ()=> {
    expect(manager.getRole()).toBe('Manager');
});
