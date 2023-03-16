const Calculator = require('./task3');

const calc1 = new Calculator();

describe('The sum of', () => {
    test('2 and 2 is', () => {
        expect(calc1.add(2, 2)).toBe(4);
    });

    test('5 and 0 is', () => {
        expect(calc1.add(5, 0)).toBe(5);
    });

    test('10 and 20 is', () => {
        expect(calc1.add(10, 20)).toBe(30);
    });
});

describe('The difference between', () => {
    test('8 and 3 is', () => {
        expect(calc1.subtract(8, 3)).toBe(5);
    });

    test('10 and 12 is', () => {
        expect(calc1.subtract(10, 12)).toBe(-2);
    });

    test('5 and 5 is', () => {
        expect(calc1.subtract(5, 5)).toBe(0);
    });
});

describe('The product of', () => {
    test('5 and 6 is', () => {
        expect(calc1.multiply(5, 6)).toBe(30);
    });

    test('12 and 0 is', () => {
        expect(calc1.multiply(12, 0)).toBe(0);
    });

    test('2 and -3 is', () => {
        expect(calc1.multiply(2, -3)).toBe(-6);
    });
});

describe('The division of', () => {
    test('20 by 4', () => {
        expect(calc1.divide(20, 4)).toBe(5);
    });

    test('0 by 5', () => {
        expect(calc1.divide(0, 5)).toBe(0);
    });

    test('50 by -10', () => {
        expect(calc1.divide(50, -10)).toBe(-5);
    });
});