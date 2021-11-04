const reverseString = require('./reverse');

test('reverse the string character', () => {
    expect(reverseString('reverse')).toBe('esrever');
});
