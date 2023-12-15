var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('Test the output of 5!', () => {
      const inputNum = 5;
      const expectedResult = 120;

      const result = Calculate.factorial(inputNum);

      assert.strictEqual(result, expectedResult);
    });

    it('Test the output of 3!', () => {
      const inputNum = 3;
      const expectedResult = 6;

      const result = Calculate.factorial(inputNum);

      assert.strictEqual(result, expectedResult);
    });
    
    it('Test the output of 0!', () => {
      const inputNum = 0;
      const expectedResult = 1;

      const result = Calculate.factorial(inputNum);

      assert.strictEqual(result, expectedResult);
    });         
  });
});