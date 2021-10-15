const utils = require('./index');
describe('Utils Test Suite:', () => {
    test('utils: should return correct order of users based on name field set 1', () => {
        const users = [{ name: 'd' }, { name: 'a' }, { name: 'z' }];
        const sortedUsers = utils.sortByName(users);
        expect(sortedUsers.length).toBe(users.length);
        expect(sortedUsers[0].name).toBe('a');
        expect(sortedUsers[1].name).toBe('d');
        expect(sortedUsers[2].name).toBe('z');
    });

    test('utils: should return correct order of users based on name field set 2', () => {
        const users = [{ name: 'ac' }, { name: 'ab' }, { name: 'zz' }, { name: 'bz' }];
        const sortedUsers = utils.sortByName(users);
        expect(sortedUsers.length).toBe(users.length);
        expect(sortedUsers[0].name).toBe('ab');
        expect(sortedUsers[1].name).toBe('ac');
        expect(sortedUsers[2].name).toBe('bz');
        expect(sortedUsers[3].name).toBe('zz');
    });
});