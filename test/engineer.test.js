const Engineer = require("../lib/engineer")

test('Make sure that what I create is an object', ()=> {
    const testSubject = new Engineer("Stanley Lewis", 7, "slewis@gmail.com")
    expect(typeof testSubject).toBe("object")
    
    test('Make sure that when I input a new name it matches the expectation', ()=> {
        expect(testSubject.getName()).toBe("Stanley Lewis");
    });
    
    test('Make sure that when I input a new ID it matches the expectation', ()=> {
        expect(testSubject.getId()).toBe(7);
    });
    
    test('Make sure that when I input a new email it matches the expectation', ()=> {
        expect(testSubject.getName()).toBe("slewis@gmail.com");
    });
});