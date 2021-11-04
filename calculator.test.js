const Calculator = require('./calculator.js');

describe('Calculator is performing well', () =>{
    let calculate = new Calculator();

    test('Summation is ', () => {
        expect(calculate.add(10,3)).toBe(13);
        expect(calculate.add(9,6)).toBe(15);
        expect(calculate.add(7,8)).toBe(15);
      });

      test('Multiplication is ', () => {
        expect(calculate.multiply(2,6)).toBe(12);
        expect(calculate.multiply(1,3)).toBe(3);
        expect(calculate.multiply(12,3)).toBe(36);
      });

      test('Subtraction is ', () => {
        expect(calculate.subtract(7,4)).toBe(3);
        expect(calculate.subtract(9,3)).toBe(6);
        expect(calculate.subtract(54,8)).toBe(46);
      });

      test('Division is ', () => {
        expect(calculate.divide(12,3)).toBe(4);
        expect(calculate.divide(4,4)).toBe(1);
        expect(calculate.divide(50,5)).toBe(10);
      });
})