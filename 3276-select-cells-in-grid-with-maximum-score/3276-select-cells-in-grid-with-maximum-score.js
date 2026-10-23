/**
 * @param {number[][]} grid
  * @return {number}
   */
   var maxScore = function(grid) {
       const valToRows = new Map();
           const m = grid.length;
               const n = grid[0].length;
               
                   // Group rows by grid values
                       for (let i = 0; i < m; i++) {
                               for (let j = 0; j < n; j++) {
                                           const val = grid[i][j];
                                                       if (!valToRows.has(val)) {
                                                                       valToRows.set(val, new Set());
                                                                                   }
                                                                                               valToRows.get(val).add(i);
                                                                                                       }
                                                                                                           }
                                                                                                           
                                                                                                               // Sort unique values in descending order
                                                                                                                   const uniqueVals = Array.from(valToRows.keys()).sort((a, b) => b - a);
                                                                                                                       const numVals = uniqueVals.length;
                                                                                                                           const memo = new Map();
                                                                                                                           
                                                                                                                               function dp(index, mask) {
                                                                                                                                       // Base case: all unique values processed
                                                                                                                                               if (index === numVals) return 0;
                                                                                                                                               
                                                                                                                                                       // Memoization key (mask is at most 10 bits for 10 rows, so we shift index by 11)
                                                                                                                                                               const key = (index << 11) | mask; 
                                                                                                                                                                       if (memo.has(key)) return memo.get(key);
                                                                                                                                                                       
                                                                                                                                                                               // Option 1: Skip the current value
                                                                                                                                                                                       let res = dp(index + 1, mask);
                                                                                                                                                                                       
                                                                                                                                                                                               // Option 2: Pick the current value from an available row
                                                                                                                                                                                                       const val = uniqueVals[index];
                                                                                                                                                                                                               for (const r of valToRows.get(val)) {
                                                                                                                                                                                                                           // If row 'r' is not yet used
                                                                                                                                                                                                                                       if ((mask & (1 << r)) === 0) {
                                                                                                                                                                                                                                                       res = Math.max(res, val + dp(index + 1, mask | (1 << r)));
                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                   memo.set(key, res);
                                                                                                                                                                                                                                                                                           return res;
                                                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                   return dp(0, 0);
                                                                                                                                                                                                                                                                                                   }; 