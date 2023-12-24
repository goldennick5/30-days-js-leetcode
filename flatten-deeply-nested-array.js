/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  var resultArr = new Array();
  arr.forEach(val => {
      if(Array.isArray(val) && n > 0) resultArr.push(...flat(val, n - 1));
      else resultArr.push(val);
  })
  return resultArr;
};

//input: arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]; n = 1;
//output: resultArr = [1,2,3,4,5,6,7,8,[9,10,11],12,13,14,15];