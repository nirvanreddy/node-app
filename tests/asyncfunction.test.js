const { delayedGreeting } = require('./asyncFunctions');

describe('Async Functions', () => {
    // Test delayedGreeting function
    it('should return a delayed greeting message', async () => {
        const name = 'John';
        const expectedMessage = `Hello, John!`;

        const message = await delayedGreeting(name);
        expect(message).toBe(expectedMessage);
    });


});
