/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  let resObj = {};
  let arr = this;
  arr.forEach(val => {
      let key = fn(val);
      if(!resObj[key]) resObj[key] = [];
      resObj[key].push(val);
  });
  return resObj;
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/