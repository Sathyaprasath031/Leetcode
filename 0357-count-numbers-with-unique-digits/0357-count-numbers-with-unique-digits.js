/**
 * @param {number} n
  * @return {number}
   */
   var countNumbersWithUniqueDigits = function(n) {
       if (n === 0) return 1;
       
           let total = 10;
               let uniqueProduct = 9;
                   let availableDigits = 9;
                   
                       for (let i = 2; i <= n && availableDigits > 0; i++) {
                               uniqueProduct *= availableDigits;
                                       total += uniqueProduct;
                                               availableDigits--;
                                                   }
                                                   
                                                       return total;
                                                       }; 