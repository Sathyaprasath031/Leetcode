/**
 * @param {number[]} nums
  * @return {number}
   */
   var largestPerimeter = function(nums) {
       // Sort the array in descending order
           nums.sort((a, b) => b - a);
               
                   // Check every consecutive triplet
                       for (let i = 0; i < nums.length - 2; i++) {
                               // If the two smaller sides are greater than the largest side, 
                                       // it forms a valid triangle with the maximum possible perimeter.
                                               if (nums[i] < nums[i + 1] + nums[i + 2]) {
                                                           return nums[i] + nums[i + 1] + nums[i + 2];
                                                                   }
                                                                       }
                                                                           
                                                                               // If no valid triangle can be formed
                                                                                   return 0;
                                                                                   };