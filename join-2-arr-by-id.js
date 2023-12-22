/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

//val = { id: 1, x: 1 }

var join = function (arr1, arr2) {
    //merging to arrays
    let concattedArr = arr1.concat(arr2);
    //creating res obj to store future result values
    let result = {};

    //looping through concattedArr
    concattedArr.forEach((item) => {
        //getting keys, in other words id's
        let id = item.id;

        //if id is not present in result obj
        if(!result[id]) {
            //creating key with id, and value where spreading object (copying)
            result[id] = {...item};
        } else {
            //if id is already present in result obj, we are rewriting prev values with new, and also adding additional not already presented values to our obj
            result[id] = {...result[id], ...item};
        }
    })
    //finally we return result obj as an array that stores values
    return Object.values(result);
};