const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      // Define expected output
      const expected = "cock-a-doodle-doo!";

      // Call Rooster.announceDawn and store result in variable
      result = Rooster.announceDawn();

      // Use an assert method to compare actual and expected result
      assert.strictEqual(result, expected);
    });

    describe(".timeAtDawn", () => {
      it("returns its argument as a string", () => {
        // Expected value
        const expected = "string";

        // Get actual value
        const testHour = 12;
        const result = typeof Rooster.timeAtDawn(12);

        // Compare the values
        assert.strictEqual(result, expected);
      });

      it("throws an error if passed a number less than 0", () => {
        const testHour = -1;

        assert.throws(() => {
          Rooster.timeAtDawn(testHour);
        }, RangeError);
      });

      it("throws an error if passed a number greater than 23", () => {
        const testHour = 24;

        assert.throws(() => {
          Rooster.timeAtDawn(testHour);
        }, RangeError);
      });
    });
  });
});
