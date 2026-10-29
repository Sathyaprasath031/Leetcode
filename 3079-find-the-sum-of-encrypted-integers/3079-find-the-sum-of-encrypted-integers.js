/**
 * @param {number[]} nums
  * @return {number}
   */
   var sumOfEncryptedInt = function(nums) {
       let sum = 0;
           
               for (let num of nums) {
                       let str = num.toString();
                               let maxDigit = '0';
                                       
                                               // Find the largest digit in the number
                                                       for (let char of str) {
                                                                   if (char > maxDigit) {
                                                                                   maxDigit = char;
                                                                                               }
                                                                                                       }
                                                                                                               
                                                                                                                       // Create the encrypted number by repeating the max digit
                                                                                                                               let encryptedNum = parseInt(maxDigit.repeat(str.length));
                                                                                                                                       sum += encryptedNum;
                                                                                                                                           }
                                                                                                                                               
                                                                                                                                                   return sum;
                                                                                                                                                   }; 