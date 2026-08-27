/**
 * @param {string} s
  * @param {string} p
   * @return {boolean}
    */
    var isMatch = function(s, p) {
        const m = s.length;
            const n = p.length;
                
                    // dp[i][j] will be true if s[0...i-1] matches p[0...j-1]
                        const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
                            
                                // Empty string matches empty pattern
                                    dp[0][0] = true;
                                        
                                            // Handle patterns like "a*", "a*b*", etc. that can match an empty string
                                                for (let j = 1; j <= n; j++) {
                                                        if (p[j - 1] === '*') {
                                                                    dp[0][j] = dp[0][j - 2];
                                                                            }
                                                                                }
                                                                                    
                                                                                        for (let i = 1; i <= m; i++) {
                                                                                                for (let j = 1; j <= n; j++) {
                                                                                                            
                                                                                                                        // If current characters match, or the pattern has a '.'
                                                                                                                                    if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                                                                                                                                                    dp[i][j] = dp[i - 1][j - 1];
                                                                                                                                                                } 
                                                                                                                                                                            // If the pattern has a '*'
                                                                                                                                                                                        else if (p[j - 1] === '*') {
                                                                                                                                                                                                        // Scenario 1: '*' represents zero occurrences of the preceding character
                                                                                                                                                                                                                        dp[i][j] = dp[i][j - 2];
                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        // Scenario 2: '*' represents one or more occurrences
                                                                                                                                                                                                                                                                        // We check if the preceding character in the pattern matches the current character in the string
                                                                                                                                                                                                                                                                                        if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                                                                                                                                                                                                                                                                                                            dp[i][j] = dp[i][j] || dp[i - 1][j];
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                            return dp[m][n];
                                                                                                                                                                                                                                                                                                                                                            }; 