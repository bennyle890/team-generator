const Engineer = require('../lib/Engineer.js');

test('Set GitHub', () => {
    const testValue = 'GitHubUser';
    const engineer = new Engineer('Bobby', 1, "bobby@test.com", testValue);
    expect(engineer.github).toBe(testValue);
});

test('Get GitHub username from getGithub()', () => {
    const testValue = 'GitHubUser';
    const engineer = new Engineer("bobby", 1, "bobby@test.com", testValue);
    expect(engineer.getGithub()).toBe(testValue);
});

test('getRole() should return \"Engineer\"', () => {
    const testValue = 'Engineer';
    const engineer = new Engineer('Bobby', 1, 'bobby@test.com', 'GitHubUser');
    expect(engineer.getRole()).toBe(testValue);
});

