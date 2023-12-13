/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cachedFuncs = {};
  return function (...args) {
      let key = JSON.stringify(args);
      if (key in cachedFuncs) {
          return cachedFuncs[key];
      }
      let res = fn(...args);
      cachedFuncs[key] = res;
      return res;
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/