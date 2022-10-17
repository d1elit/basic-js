const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    newStr = ''
    let count = 1
    str.split('').forEach((el,i,arr) => {     
        el == arr[i+1] ? count++ :   count == 1 ? newStr += el :  (newStr +=  count + el , count  = 1)
        
    });  
    return newStr
}

module.exports = {
  encodeLine
};
