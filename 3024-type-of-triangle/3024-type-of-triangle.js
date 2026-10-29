/**
 * @param {number[]} nums
  * @return {string}
   */
   var triangleType = function(nums) {
       const [a, b, c] = nums;
           
               // Check if the sides can form a valid triangle
                   if (a + b <= c || a + c <= b || b + c <= a) {
                           return "none";
                               }
                                   
                                       // Check for equilateral (all sides equal)
                                           if (a === b && b === c) {
                                                   return "equilateral";
                                                       }
                                                           
                                                               // Check for isosceles (exactly two sides equal)
                                                                   if (a === b || a === c || b === c) {
                                                                           return "isosceles";
                                                                               }
                                                                                   
                                                                                       // If all sides are different, it's scalene
                                                                                           return "scalene";
                                                                                           };