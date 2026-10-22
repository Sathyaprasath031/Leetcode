import java.util.Arrays;

class Solution {
    private int count = 0;

        public int numSquarefulPerms(int[] nums) {
                Arrays.sort(nums);
                        boolean[] used = new boolean[nums.length];
                                backtrack(nums, used, -1, 0);
                                        return count;
                                            }

                                                private void backtrack(int[] nums, boolean[] used, int lastVal, int length) {
                                                        if (length == nums.length) {
                                                                    count++;
                                                                                return;
                                                                                        }

                                                                                                for (int i = 0; i < nums.length; i++) {
                                                                                                            if (used[i]) continue;
                                                                                                                        // Skip duplicate elements at the same recursion depth
                                                                                                                                    if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;

                                                                                                                                                // Check if forming a valid adjacent squareful pair
                                                                                                                                                            if (lastVal != -1 && !isSquare(lastVal + nums[i])) continue;

                                                                                                                                                                        used[i] = true;
                                                                                                                                                                                    backtrack(nums, used, nums[i], length + 1);
                                                                                                                                                                                                used[i] = false;
                                                                                                                                                                                                        }
                                                                                                                                                                                                            }

                                                                                                                                                                                                                private boolean isSquare(int n) {
                                                                                                                                                                                                                        int r = (int) Math.sqrt(n);
                                                                                                                                                                                                                                return r * r == n;
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                    }