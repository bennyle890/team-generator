const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const { default: test } = require('node:test');

test("Set office number", () => {
    const testvalue = 100;
    const e = new Manager("Bobby", "12345", "Bobby@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});
