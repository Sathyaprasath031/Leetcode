/**
 * @param {number[]} nums
  * @return {number}
   */
   var minimumArrayLength = function(nums) {
       let min = Math.min(...nums);
           
               // Check if there's any element that leaves a remainder when divided by the minimum.
                   // If so, we can create a new, strictly smaller minimum (which will occur exactly once), 
                       // allowing us to reduce the array down to length 1.
                           for (const num of nums) {
                                   if (num % min !== 0) {
                                               return 1;
                                                       }
                                                           }
                                                               
                                                                   // If all elements are multiples of the minimum, we can't create a smaller number.
                                                                       // We can only pair the minimums with each other to turn them into 0s. 
                                                                           // Each pair of minimums reduces the count of minimums by 2.
                                                                               let minCount = 0;
                                                                                   for (const num of nums) {
                                                                                           if (num === min) {
                                                                                                       minCount++;
                                                                                                               }
                                                                                                                   }
                                                                                                                       
                                                                                                                           return Math.ceil(minCount / 2);
                                                                                                                           }; 