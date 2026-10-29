/**
 * @param {number[][]} grid
  * @return {number[]}
   */
   var findMissingAndRepeatedValues = function(grid) {
       const n = grid.length;
           const size = n * n;
               const count = new Array(size + 1).fill(0);
                   
                       // Count the frequency of each number in the grid
                           for (let r = 0; r < n; r++) {
                                   for (let c = 0; c < n; c++) {
                                               count[grid[r][c]]++;
                                                       }
                                                           }
                                                               
                                                                   let a = -1; // Repeated value
                                                                       let b = -1; // Missing value
                                                                           
                                                                               // Identify the repeated and missing numbers
                                                                                   for (let i = 1; i <= size; i++) {
                                                                                           if (count[i] === 2) {
                                                                                                       a = i;
                                                                                                               } else if (count[i] === 0) {
                                                                                                                           b = i;
                                                                                                                                   }
                                                                                                                                       }
                                                                                                                                           
                                                                                                                                               return [a, b];
                                                                                                                                               };