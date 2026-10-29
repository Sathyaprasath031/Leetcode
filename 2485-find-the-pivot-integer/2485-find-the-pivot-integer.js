/**
 * @param {number} n
  * @return {number}
   */
   var pivotInteger = function(n) {
       const totalSum = (n * (n + 1)) / 2;
           const x = Math.sqrt(totalSum);
               
                   return Number.isInteger(x) ? x : -1;
                   };