/**
 * @param {number[][]} mat
  * @param {number} k
   * @return {boolean}
    */
    var areSimilar = function(mat, k) {
        const n = mat[0].length;
            // Reduce k since shifting by n times results in the same array
                k = k % n;
                    
                        for (let i = 0; i < mat.length; i++) {
                                for (let j = 0; j < n; j++) {
                                            if (i % 2 === 0) {
                                                            // Even-indexed rows: check left shift
                                                                            if (mat[i][j] !== mat[i][(j + k) % n]) {
                                                                                                return false;
                                                                                                                }
                                                                                                                            } else {
                                                                                                                                            // Odd-indexed rows: check right shift
                                                                                                                                                            if (mat[i][j] !== mat[i][(j - k + n) % n]) {
                                                                                                                                                                                return false;
                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                            
                                                                                                                                                                                                                                return true;
                                                                                                                                                                                                                                };