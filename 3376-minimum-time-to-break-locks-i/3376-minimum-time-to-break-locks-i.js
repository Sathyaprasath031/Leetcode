/**
 * @param {number[]} strength
 * @param {number} k
 * @return {number}
 */
var findMinimumTime = function(strength, k) {
    const n = strength.length;
        const numStates = 1 << n; // 2^n possible states
            const dp = new Array(numStates).fill(Infinity);
                
                    // Base case: 0 time needed when no locks are broken
                        dp[0] = 0;
                            
                                for (let mask = 0; mask < numStates; mask++) {
                                        if (dp[mask] === Infinity) continue;
                                                
                                                        // Count how many locks have been broken in the current mask
                                                                let brokenCount = 0;
                                                                        for (let i = 0; i < n; i++) {
                                                                                    if ((mask & (1 << i)) !== 0) {
                                                                                                    brokenCount++;
                                                                                                                }
                                                                                                                        }
                                                                                                                                
                                                                                                                                        // Calculate the current factor x
                                                                                                                                                const currentX = 1 + brokenCount * k;
                                                                                                                                                        
                                                                                                                                                                // Try breaking each unbroken lock
                                                                                                                                                                        for (let i = 0; i < n; i++) {
                                                                                                                                                                                    // If the i-th lock is NOT broken yet
                                                                                                                                                                                                if ((mask & (1 << i)) === 0) {
                                                                                                                                                                                                                const nextMask = mask | (1 << i);
                                                                                                                                                                                                                                const timeToBreak = Math.ceil(strength[i] / currentX);
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                // Update the minimum time for the new state
                                                                                                                                                                                                                                                                                dp[nextMask] = Math.min(dp[nextMask], dp[mask] + timeToBreak);
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                // Return the minimum time when all locks (all bits set) are broken
                                                                                                                                                                                                                                                                                                                    return dp[numStates - 1];
};