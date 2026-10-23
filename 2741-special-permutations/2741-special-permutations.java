class Solution {
        public int specialPerm(int[] nums) {
                int n = nums.length;
                        int MOD = 1_000_000_007;
                                // memo[mask][lastIdx]
                                        Integer[][] memo = new Integer[1 << n][n];
                                                
                                                        int totalPermutations = 0;
                                                                for (int i = 0; i < n; i++) {
                                                                            totalPermutations = (totalPermutations + dfs(1 << i, i, nums, memo, n, MOD)) % MOD;
                                                                                    }
                                                                                            
                                                                                                    return totalPermutations;
                                                                                                        }
                                                                                                            
                                                                                                                private int dfs(int mask, int lastIdx, int[] nums, Integer[][] memo, int n, int MOD) {
                                                                                                                        // Base case: all elements are included in the permutation
                                                                                                                                if (mask == (1 << n) - 1) {
                                                                                                                                            return 1;
                                                                                                                                                    }
                                                                                                                                                            
                                                                                                                                                                    if (memo[mask][lastIdx] != null) {
                                                                                                                                                                                return memo[mask][lastIdx];
                                                                                                                                                                                        }
                                                                                                                                                                                                
                                                                                                                                                                                                        int count = 0;
                                                                                                                                                                                                                for (int i = 0; i < n; i++) {
                                                                                                                                                                                                                            // If the i-th element is not yet used
                                                                                                                                                                                                                                        if ((mask & (1 << i)) == 0) {
                                                                                                                                                                                                                                                        // Check the divisibility condition
                                                                                                                                                                                                                                                                        if (nums[lastIdx] % nums[i] == 0 || nums[i] % nums[lastIdx] == 0) {
                                                                                                                                                                                                                                                                                            count = (count + dfs(mask | (1 << i), i, nums, memo, n, MOD)) % MOD;
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                return memo[mask][lastIdx] = count;
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                    }
