const Intern = require('../lib/Intern.js');

test('Set school', () => {
    const testValue = 'UNCC';
    const intern = new Intern("bobby", 1, "bobby@test.com", testValue);
    expect(intern.school).toBe(testValue);
});

test('gets school from getSchool()', () => {
    const testValue = 'UNCC';
    const intern = new Intern('bobby', 1, 'bobby@test.com', testValue);
    expect(intern.getSchool()).toBe(testValue);
});

test('getRole() returns \"Intern\"', () => {
    const testValue = "Intern";
    const intern = new Intern("Bobby", 1, "bobby@test.com", 'UNCC');
    expect(intern.getRole()).toBe(testValue);
});