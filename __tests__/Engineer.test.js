const Engineer = require("../lib/Engineer")

test('create an engineer object', () => {
    const engineer = new Engineer('Deniro', 22, 'dd23@gmail.com', '@onlydeniros')

    expect(engineer.github).toEqual(expect.any(String))
});

test('github value', () => {
    const engineer = new Engineer('Deniro', 22, 'dd23@gmail.com', '@onlydeniros')

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test('get role', () => {
    const engineer = new Engineer('Deniro', 22, 'dd23@gmail.com', '@onlydeniros')

    expect(engineer.getRole()).toEqual('Engineer')
})