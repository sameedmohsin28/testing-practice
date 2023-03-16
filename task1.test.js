const stringLength = require('./task1')

it('has string', () => {
    expect(stringLength('sameed')).toBe(6);
});

it ('correct length', () => {
    expect(stringLength('liam')).not.toBe(5);
})

// it('has no string', () => {
//     expect(stringLength('')).toThrow('No string entered');
// })