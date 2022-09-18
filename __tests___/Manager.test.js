const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test("Set office number", () => {
    const testValue = 100;
    const manager = new Manager("Bobby", "12345", "Bobby@test.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const manager = new Manager("Bobby", "12345", "Bobby@test.com", testValue);
    expect(manager.getRole()).toBe(testValue);
});

test('Get office number from getOffice()', () => {
    const testValue = 100;
    const manager = new Manager("Bobby", "12345", "Bobby@test.com", testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
});