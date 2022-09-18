const Employee = require('../lib/Employee.js');

test('Create employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('Set Name', () => {
    const name = 'Benny';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Set ID', () => {
    const testValue = 100;
    const employee = new Employee("Bobby", testValue);
    expect(employee.id).toBe(testValue);
});

test('Set Email', () => {
    const testEmail = "bobby@test.com";
    const employee = new Employee(testEmail);
    expect(employee.getName()).toBe(testEmail);
});

test('Get name from getName()', () => {
    const testName = 'Benny';
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test('Get id from getID()', () => {
    const testValue = 100;
    const employee = new Employee('Bobby', testValue);
    expect(employee.getId()).toBe(testValue);
});

test('get email from getEmail()', () => {
    const testEmail = 'bobby@test.com';
    const employee = new Employee("bobby", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test('getRole() returns by \"Employee\"', () => {
    const testValue = "Employee";
    const employee = new Employee("Benny", 1, "bobby@test.com");
    expect(employee.getRole()).toBe(testValue);
});