'use strict';
const solution = require('../lib/solution.js');

describe('Solutions', function () {
  describe('#loop', () => {
    it('this should return undefined when the count is equal to 0', () => {
      let count = 19;
      let callback = solution.loop();
      expect(solution.loop(count, callback)).toBe(undefined);
    });
    it('should return null if less than 2 arguments are passed in', () => {
      expect(solution.loop()).toBeNull();
    });
    it('returns null if other than an integer is passed', () => {
      let callback = solution.loop();
      expect(solution.loop('a', callback)).toBeNull();
    });
  });
});