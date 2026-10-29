/**
 * @param {number[]} nums
  * @return {number[]}
   */
   var sortArrayByParityII = function(nums) {
       let even = 0, odd = 1;
           const n = nums.length;
               
                   while (even < n && odd < n) {
                           if (nums[even] % 2 === 0) {
                                       even += 2;
                                               } else if (nums[odd] % 2 !== 0) {
                                                           odd += 2;
                                                                   } else {
                                                                               // Swap the misplaced even and odd elements
                                                                                           [nums[even], nums[odd]] = [nums[odd], nums[even]];
                                                                                                       even += 2;
                                                                                                                   odd += 2;
                                                                                                                           }
                                                                                                                               }
                                                                                                                                   
                                                                                                                                       return nums;
                                                                                                                                       }; 