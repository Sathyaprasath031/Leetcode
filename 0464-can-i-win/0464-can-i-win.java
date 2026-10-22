class Solution {
        // memo[mask]: 0 = unvisited, 1 = true (can win), 2 = false (cannot win)
            private byte[] memo;

                public boolean canIWin(int maxChoosableInteger, int desiredTotal) {
                        // If the sum of all integers is less than desiredTotal, no one can win
                                int totalSum = maxChoosableInteger * (maxChoosableInteger + 1) / 2;
                                        if (totalSum < desiredTotal) {
                                                    return false;
                                                            }

                                                                    // If desiredTotal <= 0, the first player wins immediately
                                                                            if (desiredTotal <= 0) {
                                                                                        return true;
                                                                                                }

                                                                                                        // State space is bounded by 2^maxChoosableInteger
                                                                                                                memo = new byte[1 << maxChoosableInteger];

                                                                                                                        return canWin(maxChoosableInteger, desiredTotal, 0);
                                                                                                                            }

                                                                                                                                private boolean canWin(int maxChoosableInteger, int remainingTotal, int mask) {
                                                                                                                                        if (memo[mask] != 0) {
                                                                                                                                                    return memo[mask] == 1;
                                                                                                                                                            }

                                                                                                                                                                    for (int i = 1; i <= maxChoosableInteger; i++) {
                                                                                                                                                                                int bit = 1 << (i - 1);
                                                                                                                                                                                            // Check if the number i has not been picked yet
                                                                                                                                                                                                        if ((mask & bit) == 0) {
                                                                                                                                                                                                                        // If picking i reaches or exceeds remaining total, or opponent cannot win
                                                                                                                                                                                                                                        if (i >= remainingTotal || !canWin(maxChoosableInteger, remainingTotal - i, mask | bit)) {
                                                                                                                                                                                                                                                            memo[mask] = 1;
                                                                                                                                                                                                                                                                                return true;
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                            memo[mask] = 2;
                                                                                                                                                                                                                                                                                                                                    return false;
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                        }
