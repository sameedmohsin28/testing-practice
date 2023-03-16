const reverseString = require('./task2');

it('string is reversed', () => {
    expect(reverseString('Anderson')).toBe('nosrednA');
})

it('string is case sensitive', () => {
    expect(reverseString('kohli')).toBe('ilhok');
})