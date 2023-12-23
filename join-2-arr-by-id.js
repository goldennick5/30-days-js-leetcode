/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

//val = { id: 1, x: 1 }

var join = function (arr1, arr2) {
    let concattedArr = [...arr1, ...arr2];
    let result = {};
  
    concattedArr.forEach(val => {
        let key = val.id;
        if(!result[key]) {
            result[key] = {...val};
        } else {
            result[key] = {...result[key], ...val};
        }
    });
    return Object.values(result);
  };