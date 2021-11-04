const stringLength = require('./string');

test('get string length', () => {
    expect(stringLength('goat')).toBe(4);
});

test('Throw error string length', () => {
    expect(()=>stringLength('')).toThrow(Error);
});

test('Throw error string length', () => {
    expect(()=>stringLength('stringlenth')).toThrow(Error);
  });