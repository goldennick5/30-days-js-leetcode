/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let subArray = [];
  let resultArray = [];
  for(let i = 0; i < arr.length; i++) {
      //push elements to sub array while the length of it not equal to size
      subArray.push(arr[i]);
      //if subarray's length is equal to size, we push it; but we have situations
      //when the length of subArray is less than size, I mean when we pushed subArray if it is acceptable when 
      //subArrays length === size, but remains might be less than size, so we make i === arr.length - 1, then push what remained :)
      if(subArray.length === size || i === arr.length - 1) {
          resultArray.push(subArray);
          subArray = [];
      }
  }
  return resultArray;
};
