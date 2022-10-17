const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
    let res = []
    let indexes = []
    arr.map((e,index) => {
       if(e != -1) {
        res.push(e)
       } else {
        indexes.push(index)
       }
    })
    res.sort((a,b) => a-b)
  
    indexes.forEach((element,i) => {
       
        res.forEach((local,localI) => {
           
            if(element == localI) {
              
                res.splice(localI,0,-1)               
            }
        })
    });   
   return res.length == 0 ? arr : res
}

module.exports = {
  sortByHeight
};
