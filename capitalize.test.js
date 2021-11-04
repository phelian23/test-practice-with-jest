const capitalize= require('./capitalize');

test('The first character should be capitalized',()=>{
    const string = 'capitalize';
    expect(capitalize(string)).toBe('Capitalize');
})