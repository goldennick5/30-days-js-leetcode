/**
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function(functions) {
    
	return function(x) {
        if(Array.isArray(functions) && !functions.length) return x;
        for(let i = functions.length - 1; i >= 0; i--) {
            console.log(i)
            x = functions[i](x);
        };
        return x;
    }
};

const result = compose([x => x + 1, x => x * x, x => 2 * x])(4);
console.log(result);