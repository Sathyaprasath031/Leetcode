/**
 * @param {number[]} nums
  * @return {number[]}
   */
   var findPermutation = function(nums) {
       const n = nums.length;
           // memo[mask][last] stores the minimum cost
               const memo = Array.from({ length: 1 << n }, () => Array(n).fill(-1));
                   // nextNode[mask][last] stores the next node to reconstruct the path
                       const nextNode = Array.from({ length: 1 << n }, () => Array(n).fill(-1));
                       
                           function dfs(mask, last) {
                                   // Base case: all elements are visited, return to the start node (0)
                                           if (mask === (1 << n) - 1) {
                                                       return Math.abs(last - nums[0]);
                                                               }
                                                                       if (memo[mask][last] !== -1) {
                                                                                   return memo[mask][last];
                                                                                           }
                                                                                           
                                                                                                   let minCost = Infinity;
                                                                                                           let bestNext = -1;
                                                                                                           
                                                                                                                   // Try to visit all unvisited nodes
                                                                                                                           // Iterate in increasing order to guarantee lexicographically smallest sequence
                                                                                                                                   for (let i = 1; i < n; i++) {
                                                                                                                                               if ((mask & (1 << i)) === 0) {
                                                                                                                                                               const cost = Math.abs(last - nums[i]) + dfs(mask | (1 << i), i);
                                                                                                                                                                               if (cost < minCost) {
                                                                                                                                                                                                   minCost = cost;
                                                                                                                                                                                                                       bestNext = i;
                                                                                                                                                                                                                                       }
                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                   nextNode[mask][last] = bestNext;
                                                                                                                                                                                                                                                                           return memo[mask][last] = minCost;
                                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                   // Start with 0 visited (mask = 1) and last element being 0
                                                                                                                                                                                                                                                                                       dfs(1, 0);
                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                           // Reconstruct the permutation path
                                                                                                                                                                                                                                                                                               const ans = [0];
                                                                                                                                                                                                                                                                                                   let currMask = 1;
                                                                                                                                                                                                                                                                                                       let currLast = 0;
                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                           for (let i = 1; i < n; i++) {
                                                                                                                                                                                                                                                                                                                   let nxt = nextNode[currMask][currLast];
                                                                                                                                                                                                                                                                                                                           ans.push(nxt);
                                                                                                                                                                                                                                                                                                                                   currMask |= (1 << nxt);
                                                                                                                                                                                                                                                                                                                                           currLast = nxt;
                                                                                                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                   return ans;
                                                                                                                                                                                                                                                                                                                                                   }; 