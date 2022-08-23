const Employee = require("../employee")

test('Make sure that what I create is an object', ()=> {
    const testSubject = new Employee()
    expect(typeof testSubject).toBe("object")
})

test('Make sure that when I input a new name it matches the expectation', ()=> {
    const testSubject = new Employee("John")

    expect(testSubject.name).toBe("John")
    expect(testSubject.getName()).toBe("John")
})