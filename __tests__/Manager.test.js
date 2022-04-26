
const Manager = require('../lib/Manager');

test('create an object for manager', () => {
    const manager = new Manager('Deniro', 26, 'dd23@gmail.com', 4)

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('getRole value', () => {
    const manager = new Manager('Deniro', 26, 'dd23@gmail.com', 4)

    expect(manager.getRole()).toEqual('Manager');
})

