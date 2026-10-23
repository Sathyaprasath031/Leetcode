/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} score
 * @return {number}
 */
var maxProfit = function(n, edges, score) {
    const req = new Int32Array(n);
        for (let i = 0; i < edges.length; i++) {
                const u = edges[i][0];
                        const v = edges[i][1];
                                req[v] |= (1 << u);
                                    }

                                        const maxMask = 1 << n;
                                            
                                                // dp[mask] stores the maximum profit achievable for the subset of nodes represented by `mask`
                                                    const dp = new Int32Array(maxMask);
                                                        dp.fill(-1); // Initialize with -1 to indicate unreachable states
                                                            dp[0] = 0;   // Base case: 0 profit for 0 nodes

                                                                // Precompute popcount (number of set bits) for each mask to determine the 1-based position quickly
                                                                    const popcnt = new Int32Array(maxMask);
                                                                        for (let i = 1; i < maxMask; i++) {
                                                                                popcnt[i] = popcnt[i >> 1] + (i & 1);
                                                                                    }

                                                                                        // Iterate through all possible subsets of nodes
                                                                                            for (let mask = 0; mask < maxMask; mask++) {
                                                                                                    const currentProfit = dp[mask];
                                                                                                            // Skip if this subset is not a valid topological configuration
                                                                                                                    if (currentProfit === -1) continue;
                                                                                                                            
                                                                                                                                    // The position for the NEXT node we add is current number of placed nodes + 1
                                                                                                                                            const pos = popcnt[mask] + 1;
                                                                                                                                                    
                                                                                                                                                            // Try adding each possible next node
                                                                                                                                                                    for (let i = 0; i < n; i++) {
                                                                                                                                                                                // Check if node 'i' is NOT already in the mask
                                                                                                                                                                                            if ((mask & (1 << i)) === 0) {
                                                                                                                                                                                                            // Check if all prerequisite nodes for 'i' are already present in the mask
                                                                                                                                                                                                                            if ((mask & req[i]) === req[i]) {
                                                                                                                                                                                                                                                const nextMask = mask | (1 << i);
                                                                                                                                                                                                                                                                    const newProfit = currentProfit + score[i] * pos;
                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                            // Update the maximum profit for the new state
                                                                                                                                                                                                                                                                                                                                if (newProfit > dp[nextMask]) {
                                                                                                                                                                                                                                                                                                                                                        dp[nextMask] = newProfit;
                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                                                        // The answer is the max profit when all 'n' nodes are placed (all n bits set)
                                                                                                                                                                                                                                                                                                                                                                                                                            return dp[maxMask - 1];
};