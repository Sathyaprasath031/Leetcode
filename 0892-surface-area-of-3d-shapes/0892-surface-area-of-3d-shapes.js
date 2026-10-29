/**
 * @param {number[][]} grid
  * @return {number}
   */
   var surfaceArea = function(grid) {
       let area = 0;
           const n = grid.length;
           
               for (let i = 0; i < n; i++) {
                       for (let j = 0; j < n; j++) {
                                   if (grid[i][j] > 0) {
                                                   // A standalone tower of height v has a surface area of 4*v + 2
                                                                   area += (grid[i][j] * 4) + 2;
                                                                                   
                                                                                                   // Subtract the faces hidden by the adjacent tower in the previous row
                                                                                                                   if (i > 0) {
                                                                                                                                       area -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
                                                                                                                                                       }
                                                                                                                                                                       
                                                                                                                                                                                       // Subtract the faces hidden by the adjacent tower in the previous column
                                                                                                                                                                                                       if (j > 0) {
                                                                                                                                                                                                                           area -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                       }
                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                       return area;
                                                                                                                                                                                                                                                                       };