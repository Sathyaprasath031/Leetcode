/**
 * @param {number} n
  * @param {number[]} primes
   * @return {number}
    */
    var nthSuperUglyNumber = function(n, primes) {
        const dp = new Array(n);
            dp[0] = 1; // The first super ugly number is always 1
                
                    // pointers[i] tracks the index in dp that primes[i] will multiply next
                        const pointers = new Array(primes.length).fill(0);
                            
                                for (let i = 1; i < n; i++) {
                                        let nextUgly = Infinity;
                                                
                                                        // Find the minimum possible next super ugly number
                                                                for (let j = 0; j < primes.length; j++) {
                                                                            nextUgly = Math.min(nextUgly, dp[pointers[j]] * primes[j]);
                                                                                    }
                                                                                            
                                                                                                    dp[i] = nextUgly;
                                                                                                            
                                                                                                                    // Increment the pointer(s) that generated this minimum value
                                                                                                                            // We check all to avoid duplicate numbers in our dp array
                                                                                                                                    for (let j = 0; j < primes.length; j++) {
                                                                                                                                                if (nextUgly === dp[pointers[j]] * primes[j]) {
                                                                                                                                                                pointers[j]++;
                                                                                                                                                                            }
                                                                                                                                                                                    }
                                                                                                                                                                                        }
                                                                                                                                                                                            
                                                                                                                                                                                                return dp[n - 1];
                                                                                                                                                                                                }; 