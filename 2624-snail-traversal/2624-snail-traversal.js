/**
 * @param {number} rowsCount
  * @param {number} colsCount
   * @return {Array<Array<number>>}
    */
    Array.prototype.snail = function(rowsCount, colsCount) {
        // Check if the 1D array size matches the required 2D matrix size
            if (rowsCount * colsCount !== this.length) {
                    return [];
                        }
                        
                            // Initialize the 2D array
                                const res = Array.from({ length: rowsCount }, () => new Array(colsCount));
                                
                                    for (let i = 0; i < this.length; i++) {
                                            // Determine the column index
                                                    const col = Math.floor(i / rowsCount);
                                                            
                                                                    // Determine if we are moving top-to-bottom or bottom-to-top
                                                                            const isGoingDown = col % 2 === 0;
                                                                                    
                                                                                            // Calculate the row index based on the direction
                                                                                                    const row = isGoingDown 
                                                                                                                ? (i % rowsCount) 
                                                                                                                            : (rowsCount - 1 - (i % rowsCount));
                                                                                                                            
                                                                                                                                    // Assign the value to the correct coordinate
                                                                                                                                            res[row][col] = this[i];
                                                                                                                                                }
                                                                                                                                                
                                                                                                                                                    return res;
                                                                                                                                                    }
                                                                                                                                                    
                                                                                                                                                    