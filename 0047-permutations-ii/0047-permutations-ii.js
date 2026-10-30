/**
 * @param {number[]} nums
  * @return {number[][]}
   */
   var permuteUnique = function(nums) {
       const result = [];
           nums.sort((a, b) => a - b);
               const used = new Array(nums.length).fill(false);
               
                   function backtrack(path) {
                           if (path.length === nums.length) {
                                       result.push([...path]);
                                                   return;
                                                           }
                                                           
                                                                   for (let i = 0; i < nums.length; i++) {
                                                                               // Skip already used elements
                                                                                           if (used[i]) continue;
                                                                                           
                                                                                                       // Skip duplicates: if the current element equals the previous one,
                                                                                                                   // only pick it if the previous duplicate has already been used in this branch.
                                                                                                                               if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
                                                                                                                               
                                                                                                                                           used[i] = true;
                                                                                                                                                       path.push(nums[i]);
                                                                                                                                                       
                                                                                                                                                                   backtrack(path);
                                                                                                                                                                   
                                                                                                                                                                               path.pop();
                                                                                                                                                                                           used[i] = false;
                                                                                                                                                                                                   }
                                                                                                                                                                                                       }
                                                                                                                                                                                                       
                                                                                                                                                                                                           backtrack([]);
                                                                                                                                                                                                               return result;
                                                                                                                                                                                                               };