/**
 * @param {number[]} nums
  * @return {number}
   */
   var thirdMax = function(nums) {
       const unique = Array.from(new Set(nums)).sort((a, b) => b - a);
           return unique.length >= 3 ? unique[2] : unique[0];
           };