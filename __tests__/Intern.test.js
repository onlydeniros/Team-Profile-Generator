const Intern = require('../lib/Intern')
test('create intern object', () => {
    const intern = new Intern('Deniro', 22, 'dd23@gmail.com', 'creekside');

    expect(intern.school).toEqual(expect.any(String));
});

test('getSchool value', () => {
    const intern = new Intern('Deniro', 22, 'dd23@gmail.com', 'creekside');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get roles', () => {
    const intern = new Intern('Deniro', 22, 'dd23@gmail.com', 'creekside');

    expect(intern.getRole()).toEqual('Intern')
})