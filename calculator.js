class Calculator {
    add(num1, num2) {
        const value = num1+num2;
        return value;
    }
    multiply(num1, num2) {
        const value = num1*num2;
        return value;
    }
    subtract(num1, num2){
        const value = num1-num2;
        return value;
    }
    divide(num1, num2){
        const value = num1/num2;
        return value;
    }
}

module.exports = Calculator;