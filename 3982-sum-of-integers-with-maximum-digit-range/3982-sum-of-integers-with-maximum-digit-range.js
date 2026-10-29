/**
 * @param {number[]} nums
  * @return {number}
   */
   var maxDigitRange = function(nums) {
       let maxRange = -1;
           let sum = 0;
           
               for (let num of nums) {
                       let temp = num;
                               let maxDigit = -1;
                                       let minDigit = 10;
                                       
                                               // Find the largest and smallest digit of the current number
                                                       while (temp > 0) {
                                                                   let d = temp % 10;
                                                                               maxDigit = Math.max(maxDigit, d);
                                                                                           minDigit = Math.min(minDigit, d);
                                                                                                       temp = Math.floor(temp / 10);
                                                                                                               }
                                                                                                               
                                                                                                                       let range = maxDigit - minDigit;
                                                                                                                       
                                                                                                                               // Update the maximum range and corresponding sum
                                                                                                                                       if (range > maxRange) {
                                                                                                                                                   maxRange = range;
                                                                                                                                                               sum = num; 
                                                                                                                                                                       } else if (range === maxRange) {
                                                                                                                                                                                   sum += num; 
                                                                                                                                                                                           }
                                                                                                                                                                                               }
                                                                                                                                                                                               
                                                                                                                                                                                                   return sum;
                                                                                                                                                                                                   }; 