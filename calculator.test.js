const calculator = require('./calculator')

test('Functional Calculator', () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.subtract(2,1)).toBe(1);
    expect(calculator.divide(2,2)).toBe(1);
    expect(calculator.multiply(1,2)).toBe(2);
})