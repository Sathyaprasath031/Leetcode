/**
 * @param {number[]} nums
  * @return {number[]}
   */
   var majorityElement = function(nums) {
       let cand1 = null;
           let cand2 = null;
               let count1 = 0;
                   let count2 = 0;
                   
                       // Step 1: Find candidate elements using Boyer-Moore Voting Algorithm
                           for (const num of nums) {
                                   if (num === cand1) {
                                               count1++;
                                                       } else if (num === cand2) {
                                                                   count2++;
                                                                           } else if (count1 === 0) {
                                                                                       cand1 = num;
                                                                                                   count1 = 1;
                                                                                                           } else if (count2 === 0) {
                                                                                                                       cand2 = num;
                                                                                                                                   count2 = 1;
                                                                                                                                           } else {
                                                                                                                                                       count1--;
                                                                                                                                                                   count2--;
                                                                                                                                                                           }
                                                                                                                                                                               }
                                                                                                                                                                               
                                                                                                                                                                                   // Step 2: Validate candidates by counting actual occurrences
                                                                                                                                                                                       count1 = 0;
                                                                                                                                                                                           count2 = 0;
                                                                                                                                                                                               for (const num of nums) {
                                                                                                                                                                                                       if (num === cand1) count1++;
                                                                                                                                                                                                               else if (num === cand2) count2++;
                                                                                                                                                                                                                   }
                                                                                                                                                                                                                   
                                                                                                                                                                                                                       const threshold = Math.floor(nums.length / 3);
                                                                                                                                                                                                                           const result = [];
                                                                                                                                                                                                                           
                                                                                                                                                                                                                               if (cand1 !== null && count1 > threshold) result.push(cand1);
                                                                                                                                                                                                                                   if (cand2 !== null && count2 > threshold) result.push(cand2);
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                       return result;
                                                                                                                                                                                                                                       }; 