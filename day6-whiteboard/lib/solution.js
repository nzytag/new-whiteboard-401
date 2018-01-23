'use strict';

const solution = module.exports = {};
//first we take a function that takes in 2 arguments in line 5
solution.loop = function(count, callback) {
  //then we tell it that if the argument is equal to 0, to be undefined
  if(count === 0) return undefined;

  //then we pass an invalid argument to return null 
  if (!count) return null;
  //this is for when the argument passed is not a number, return null
  if (typeof count !== 'number' || count < 0) return null;
  
  //but if the count is higher than 0, decrement to get to 0
  count --;
  //this is a recursive callback to pass in the decrement values
  solution.loop(count, callback);
};


