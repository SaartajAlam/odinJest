const reverseString = require('./reverseString')

test('reverse abc to equal cba', () => {
    expect(reverseString('abc')).toEqual('cba');
})