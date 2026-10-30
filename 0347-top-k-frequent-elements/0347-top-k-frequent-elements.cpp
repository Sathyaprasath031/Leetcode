#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> topKFrequent(std::vector<int>& nums, int k) {
            std::unordered_map<int, int> count;
                    for (int num : nums) {
                                count[num]++;
                                        }

                                                std::vector<std::vector<int>> buckets(nums.size() + 1);
                                                        for (const auto& [num, freq] : count) {
                                                                    buckets[freq].push_back(num);
                                                                            }

                                                                                    std::vector<int> result;
                                                                                            for (int i = buckets.size() - 1; i >= 0 && result.size() < k; --i) {
                                                                                                        for (int num : buckets[i]) {
                                                                                                                        result.push_back(num);
                                                                                                                                        if (result.size() == k) return result;
                                                                                                                                                    }
                                                                                                                                                            }
                                                                                                                                                                    return result;
                                                                                                                                                                        }
                                                                                                                                                                        };