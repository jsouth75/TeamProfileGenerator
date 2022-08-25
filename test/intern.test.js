const Intern = require("../lib/intern")

test('Make sure that what I create is an object', ()=> {
    const testSubject = new Intern()
    expect(typeof testSubject).toBe("object")
})

test('Make sure that when I input a new name it matches the expectation', ()=> {
    const testSubject = new Intern("John")

    expect(testSubject.name).toBe("John")
    expect(testSubject.getName()).toBe("John")
})