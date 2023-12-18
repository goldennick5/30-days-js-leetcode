/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if(!Array.isArray(obj) && Object.keys(obj).length !== 0 && typeof obj === 'object') return false;
  if(Array.isArray(obj) && obj.length !== 0) return false;
  return true;
};