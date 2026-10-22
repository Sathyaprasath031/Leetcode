class Solution {
        public int countArrangement(int n) {
                // dp[mask] stores the number of valid arrangements using the subset of numbers represented by mask.
                        // The index being filled corresponds to Integer.bitCount(mask).
                                int[] dp = new int[1 << n];
                                        dp[0] = 1;

                                                for (int mask = 0; mask < (1 << n); mask++) {
                                                            if (dp[mask] == 0) continue;

                                                                        // i is the 1-based index currently being placed
                                                                                    int i = Integer.bitCount(mask) + 1;

                                                                                                for (int num = 1; num <= n; num++) {
                                                                                                                int bit = 1 << (num - 1);
                                                                                                                                // Check if 'num' has not been used yet
                                                                                                                                                if ((mask & bit) == 0) {
                                                                                                                                                                    // Check the divisibility condition for a beautiful arrangement
                                                                                                                                                                                        if (num % i == 0 || i % num == 0) {
                                                                                                                                                                                                                dp[mask | bit] += dp[mask];
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                return dp[(1 << n) - 1];
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                    }
