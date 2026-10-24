/**
 * @param {number[]} tasks
  * @param {number} sessionTime
   * @return {number}
    */
    var minSessions = function(tasks, sessionTime) {
        const n = tasks.length;
            const dp = Array.from({ length: 1 << n }, () => [Infinity, Infinity]);
                
                    // Base case: 0 tasks completed requires 1 session with 0 time used.
                        dp[0] = [1, 0];
                        
                            for (let mask = 1; mask < (1 << n); mask++) {
                                    for (let i = 0; i < n; i++) {
                                                // Check if the i-th task is included in the current mask
                                                            if ((mask & (1 << i)) !== 0) {
                                                                            const prevMask = mask ^ (1 << i);
                                                                                            let [sessions, timeUsed] = dp[prevMask];
                                                                                            
                                                                                                            // If adding the current task exceeds session time, start a new session
                                                                                                                            if (timeUsed + tasks[i] <= sessionTime) {
                                                                                                                                                timeUsed += tasks[i];
                                                                                                                                                                } else {
                                                                                                                                                                                    sessions += 1;
                                                                                                                                                                                                        timeUsed = tasks[i];
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        
                                                                                                                                                                                                                                        // Update the DP state to keep the minimum sessions, breaking ties by minimum time used
                                                                                                                                                                                                                                                        if (sessions < dp[mask][0] || (sessions === dp[mask][0] && timeUsed < dp[mask][1])) {
                                                                                                                                                                                                                                                                            dp[mask] = [sessions, timeUsed];
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                        return dp[(1 << n) - 1][0];
                                                                                                                                                                                                                                                                                                                        }; 