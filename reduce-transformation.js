/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  if(nums.length === 0) return init;
  const reduced = [];
  nums.forEach(num => {
      init = fn(init, num);
      reduced.push(init);
  });
  const lastIndex = reduced.length - 1;
  return reduced[lastIndex];
};