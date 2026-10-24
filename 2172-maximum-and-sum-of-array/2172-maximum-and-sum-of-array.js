/**
 * @param {number[]} nums
  * @param {number} numSlots
   * @return {number}
    */
    var maximumANDSum = function(nums, numSlots) {
        const n = nums.length;
            const m = 2 * numSlots; 
                const dp = new Int32Array(1 << m);
                    let maxAns = 0;
                    
                        for (let mask = 1; mask < (1 << m); mask++) {
                                let c = 0;
                                        for (let temp = mask; temp > 0; temp &= temp - 1) {
                                                    c++;
                                                            }
                                                                    
                                                                            if (c > n) continue;
                                                                                    
                                                                                            for (let i = 0; i < m; i++) {
                                                                                                        if (mask & (1 << i)) {
                                                                                                                        const prev = mask ^ (1 << i);
                                                                                                                                        const slot = Math.floor(i / 2) + 1;
                                                                                                                                                        dp[mask] = Math.max(dp[mask], dp[prev] + (nums[c - 1] & slot));
                                                                                                                                                                    }
                                                                                                                                                                            }
                                                                                                                                                                                    
                                                                                                                                                                                            if (c === n) {
                                                                                                                                                                                                        maxAns = Math.max(maxAns, dp[mask]);
                                                                                                                                                                                                                }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                        
                                                                                                                                                                                                                            return maxAns;
                                                                                                                                                                                                                            }; 