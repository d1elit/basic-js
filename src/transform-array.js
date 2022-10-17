const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
    if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
    let clArr = arr.slice(0)
    arr.forEach((el,i) => {
     if(el == '--double-next') {  
        if(i == arr.length-1) {
            clArr.splice(i,1)
        } else {
            clArr.splice(i,1,clArr[i+1])
        }
        
     }
     if(el == '--discard-prev') {
        if(i == 0) {
            clArr.splice(i,1)
        } else {
            clArr.splice(i-1,2)
        }

     }
     if(el == '--discard-next') {
        if(i == arr.length-1) {
            clArr.splice(i,1) 
        } else {
            clArr.splice(i,2) 
        }
       
     }
     if(el == '--double-prev') {
       
        let index = clArr.indexOf('--double-prev')
      
        if(i == 0) {
            clArr.splice(i,1)
        } else {
            console.log(clArr, 'index: ', index, 'elem: ', clArr[index-1])
            clArr.splice(index-1,0,clArr[index-1])
            console.log(clArr, 'index: ', index, 'elem: ', clArr[index-1])
            // clArr.splice( clArr.indexOf('--double-prev'),1)
        }
     }
    
    })
    
    clArr.indexOf('--double-next') != -1 ? clArr.splice(clArr.indexOf('--double-next'),1) : false
    clArr.indexOf('--double-prev') != -1 ? clArr.splice(clArr.indexOf('--double-prev'),1) : false
    clArr.indexOf('--discard-next') != -1 ? clArr.splice(clArr.indexOf('--discard-next'),1) : false
    clArr.indexOf('--discard-prev') != -1 ? clArr.splice(clArr.indexOf('--discard-prev'),1) : false


   return clArr
}

module.exports = {
  transform
};
