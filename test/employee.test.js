const Employee = require("../lib/employee")

test('Make sure that what I create is an object', ()=> {
    const testSubject = new Employee()
    expect(typeof testSubject).toBe("object")
});

test('Make sure that when I input a new name it matches the expectation', ()=> {
    const testSubject = new Employee("Stanly")
    
    expect(testSubject.name).toBe("Stanley")
    expect(testSubject.getName()).toBe("Stanley")
});

test('Make sure that when I input a new ID it matches the expectation', ()=> {
    const testSubject = new Employee(7)
    
    expect(testSubject.getId()).toBe(7);
});

test('Make sure that when I input a new email it matches the expectation', ()=> {
    const testSubject = new Employee("slewis@gmail.com")
    expect(testSubject.getName()).toBe("slewis@gmail.com")
});