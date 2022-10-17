const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
    res = []  
    n = ''+n
    n.split('').forEach((element,index) => {       
        let arr = n.split('') 
        arr.splice(index,1)  
        res.push(arr.join(''))    
    });       
    return +res.sort((a,b) => {return +a - +b}).pop()
}

module.exports = {
  deleteDigit
};
