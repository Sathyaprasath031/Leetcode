#include <vector>
#include <algorithm>

class Solution {
public:
    void wiggleSort(std::vector<int>& nums) {
            int n = nums.size();
                    std::vector<int> sorted_nums = nums;
                            std::sort(sorted_nums.begin(), sorted_nums.end());

                                    // Pointer for the smaller half: (n - 1) / 2 down to 0
                                            int left = (n - 1) / 2;
                                                    // Pointer for the larger half: n - 1 down to (n + 1) / 2
                                                            int right = n - 1;

                                                                    for (int i = 0; i < n; ++i) {
                                                                                // Fill odd indices with the larger elements, even indices with smaller
                                                                                            if (i % 2 == 1) {
                                                                                                            nums[i] = sorted_nums[right--];
                                                                                                                        } else {
                                                                                                                                        nums[i] = sorted_nums[left--];
                                                                                                                                                    }
                                                                                                                                                            }
                                                                                                                                                                }
                                                                                                                                                                };