import java.util.*;

class Solution {
    public int numberWays(List<List<Integer>> hats) {
            int n = hats.size();
                    int MOD = 1_000_000_007;

                            // Invert the mapping: map each hat (1 to 40) to the people who like it
                                    List<Integer>[] hatToPeople = new ArrayList[41];
                                            for (int i = 1; i <= 40; i++) {
                                                        hatToPeople[i] = new ArrayList<>();
                                                                }

                                                                        for (int person = 0; person < n; person++) {
                                                                                    for (int hat : hats.get(person)) {
                                                                                                    hatToPeople[hat].add(person);
                                                                                                                }
                                                                                                                        }

                                                                                                                                // dp[mask] = number of ways to assign hats such that people in 'mask' have hats
                                                                                                                                        int totalMasks = 1 << n;
                                                                                                                                                int[] dp = new int[totalMasks];
                                                                                                                                                        dp[0] = 1; // Base case: 1 way to assign hats to 0 people

                                                                                                                                                                // Iterate through all 40 hats
                                                                                                                                                                        for (int hat = 1; hat <= 40; hat++) {
                                                                                                                                                                                    if (hatToPeople[hat].isEmpty()) {
                                                                                                                                                                                                    continue;
                                                                                                                                                                                                                }

                                                                                                                                                                                                                            // Iterate backwards to update DP array in-place without overwriting previous states
                                                                                                                                                                                                                                        for (int mask = totalMasks - 1; mask >= 0; mask--) {
                                                                                                                                                                                                                                                        if (dp[mask] == 0) continue;

                                                                                                                                                                                                                                                                        for (int person : hatToPeople[hat]) {
                                                                                                                                                                                                                                                                                            // If this person doesn't have a hat yet
                                                                                                                                                                                                                                                                                                                if ((mask & (1 << person)) == 0) {
                                                                                                                                                                                                                                                                                                                                        int nextMask = mask | (1 << person);
                                                                                                                                                                                                                                                                                                                                                                dp[nextMask] = (dp[nextMask] + dp[mask]) % MOD;
                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                // Target: all n people have a hat (mask = (1 << n) - 1)
                                                                                                                                                                                                                                                                                                                                                                                                                                        return dp[totalMasks - 1];
                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                            }