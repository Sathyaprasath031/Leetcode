/**
 * @param {number[]} nums1
  * @param {number[]} nums2
   * @return {number}
    */
    var minimumXORSum = function(nums1, nums2) {
        const n = nums1.length;
            // memoization array for 2^n possible bitmask states
                const memo = new Array(1 << n).fill(-1);
                
                    // Helper function to count the number of set bits (1s) in a number
                        const countBits = (mask) => {
                                let count = 0;
                                        while (mask > 0) {
                                                    count += mask & 1;
                                                                mask >>= 1;
                                                                        }
                                                                                return count;
                                                                                    };
                                                                                    
                                                                                        const dp = (mask) => {
                                                                                                // Base case: all elements have been paired
                                                                                                        if (mask === (1 << n) - 1) return 0;
                                                                                                                
                                                                                                                        // Return cached result if already computed
                                                                                                                                if (memo[mask] !== -1) return memo[mask];
                                                                                                                                
                                                                                                                                        // The number of set bits indicates how many elements from nums1 are paired
                                                                                                                                                const i = countBits(mask);
                                                                                                                                                        let minSum = Infinity;
                                                                                                                                                        
                                                                                                                                                                // Try pairing nums1[i] with every available nums2[j]
                                                                                                                                                                        for (let j = 0; j < n; j++) {
                                                                                                                                                                                    // Check if j-th element of nums2 is NOT yet used in the current mask
                                                                                                                                                                                                if ((mask & (1 << j)) === 0) {
                                                                                                                                                                                                                // Calculate XOR and recursively solve for the next state
                                                                                                                                                                                                                                const currentXor = nums1[i] ^ nums2[j];
                                                                                                                                                                                                                                                minSum = Math.min(minSum, currentXor + dp(mask | (1 << j)));
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                            memo[mask] = minSum;
                                                                                                                                                                                                                                                                                    return minSum;
                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                            return dp(0);
                                                                                                                                                                                                                                                                                            }; 