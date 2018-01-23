'use strict';
const recurs = require('../lib/solution.js');

describe('Recursive Module', function () {
  describe('#Recursive Loop', () => {
    it('this should return undefined when the count is equal to 0', () => {
      let count = 19;
      let callback = recurs.loop();
      expect(recurs.loop(count, callback)).toBe(undefined);
    });
    it('should return null if less than 2 arguments are passed in', () => {
      expect(recurs.loop()).toBeNull();
    });
    it('returns null if other than an integer is passed', () => {
      let callback = recurs.loop();
      expect(recurs.loop('a', callback)).toBeNull();
    });
  });
});