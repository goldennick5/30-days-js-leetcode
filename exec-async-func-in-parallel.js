/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
      var results = new Array(functions.length);
      var completedCnt = 0;
      functions.forEach((fn, index) => {
          fn().then((res) => {
              results[index] = res;
              completedCnt++;
          }).then(() => {
              if (completedCnt === results.length) resolve(results);
          }).catch(err => {
              reject(err);
          })
      })
  })
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/