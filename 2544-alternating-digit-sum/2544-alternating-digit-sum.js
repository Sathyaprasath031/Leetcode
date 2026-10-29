/**
 * @param {number} n
  * @return {number}
   */
   var alternateDigitSum = function(n) {
       let sum = 0;
           let sign = 1;
               let str = n.toString();
                   
                       for (let i = 0; i < str.length; i++) {
                               sum += sign * parseInt(str[i]);
                                       sign *= -1; // Flip the sign for the next digit
                                           }
                                               
                                                   return sum;
                                                   }; 