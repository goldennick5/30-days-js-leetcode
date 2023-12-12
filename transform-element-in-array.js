/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  return arr.map((num, index) => {
      return fn(num, index)
  });
};