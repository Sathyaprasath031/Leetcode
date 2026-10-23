/**
 * @param {number[]} cookies
  * @param {number} k
   * @return {number}
    */
    var distributeCookies = function(cookies, k) {
        let minUnfairness = Infinity;
            const children = new Array(k).fill(0);
            
                // Sort cookies descending to distribute larger bags first.
                    // This helps in reaching a high maximum early, making our pruning more effective.
                        cookies.sort((a, b) => b - a);
                        
                            const backtrack = (index) => {
                                    // Base case: all bags have been distributed
                                            if (index === cookies.length) {
                                                        let currentUnfairness = Math.max(...children);
                                                                    minUnfairness = Math.min(minUnfairness, currentUnfairness);
                                                                                return;
                                                                                        }
                                                                                        
                                                                                                for (let i = 0; i < k; i++) {
                                                                                                            // Pruning 1: If giving this bag to the current child exceeds or equals 
                                                                                                                        // our found minUnfairness, it can't be a better solution.
                                                                                                                                    if (children[i] + cookies[index] >= minUnfairness) {
                                                                                                                                                    continue;
                                                                                                                                                                }
                                                                                                                                                                
                                                                                                                                                                            children[i] += cookies[index];
                                                                                                                                                                                        backtrack(index + 1);
                                                                                                                                                                                                    children[i] -= cookies[index];
                                                                                                                                                                                                    
                                                                                                                                                                                                                // Pruning 2: Symmetry breaking
                                                                                                                                                                                                                            // If a child has 0 cookies, assigning the current bag to them is 
                                                                                                                                                                                                                                        // identical to assigning it to any other child who currently has 0 cookies.
                                                                                                                                                                                                                                                    if (children[i] === 0) {
                                                                                                                                                                                                                                                                    break;
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                backtrack(0);
                                                                                                                                                                                                                                                                                                    return minUnfairness;
                                                                                                                                                                                                                                                                                                    }; 