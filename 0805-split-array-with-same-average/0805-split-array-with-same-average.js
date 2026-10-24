/**
 * @param {number[]} nums
  * @return {boolean}
   */
   var splitArraySameAverage = function(nums) {
       const n = nums.length;
           if (n === 1) return false;
               
                   let sum = nums.reduce((a, b) => a + b, 0);
                       
                           // Step 1: Early Pruning
                               // If we split into A and B, avg(A) == avg(B) == avg(nums).
                                   // Sum(A) = avg(nums) * len(A) = (sum * len(A)) / n
                                       // Since Sum(A) must be an integer, (sum * len(A)) % n must be 0.
                                           // We only need to check len(A) up to n / 2, because if A is larger, B is smaller and we can just swap them.
                                               let possible = false;
                                                   const m = Math.floor(n / 2);
                                                       for (let i = 1; i <= m; i++) {
                                                               if ((sum * i) % n === 0) {
                                                                           possible = true;
                                                                                       break;
                                                                                               }
                                                                                                   }
                                                                                                       
                                                                                                           if (!possible) return false;
                                                                                                               
                                                                                                                   // Step 2: DP (Subset Sum)
                                                                                                                       // dp[i] will store all possible sums we can get by choosing exactly 'i' elements.
                                                                                                                           const dp = Array.from({ length: m + 1 }, () => new Set());
                                                                                                                               dp[0].add(0);
                                                                                                                                   
                                                                                                                                       for (const num of nums) {
                                                                                                                                               // Iterate backwards to avoid reusing the same element
                                                                                                                                                       for (let i = m; i >= 1; i--) {
                                                                                                                                                                   for (const prevSum of dp[i - 1]) {
                                                                                                                                                                                   dp[i].add(prevSum + num);
                                                                                                                                                                                               }
                                                                                                                                                                                                       }
                                                                                                                                                                                                           }
                                                                                                                                                                                                               
                                                                                                                                                                                                                   // Step 3: Check if any valid combination exists
                                                                                                                                                                                                                       for (let i = 1; i <= m; i++) {
                                                                                                                                                                                                                               if ((sum * i) % n === 0) {
                                                                                                                                                                                                                                           const targetSum = (sum * i) / n;
                                                                                                                                                                                                                                                       if (dp[i].has(targetSum)) {
                                                                                                                                                                                                                                                                       return true;
                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                       return false;
                                                                                                                                                                                                                                                                                                       }; 