const capitalize = require('./task4');

test('First letter capital', () => {
    expect(capitalize('November')).toBe('November');
});

test('First letter capital', () => {
    expect(capitalize('december')).toBe('December');
});