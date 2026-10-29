/**
 * @param {number[]} nums
  * @param {number} k
   * @return {boolean}
    */
    var checkSubarraySum = function(nums, k) {
        // Map to store the first time we see a specific remainder: (remainder -> index)
            let map = new Map();
                
                    // Initialize with 0 at index -1 to handle cases where the valid subarray starts at index 0
                        map.set(0, -1);
                            
                                let prefixSum = 0;
                                
                                    for (let i = 0; i < nums.length; i++) {
                                            prefixSum += nums[i];
                                                    
                                                            let remainder = prefixSum % k;
                                                                    
                                                                            // If we have seen this remainder before
                                                                                    if (map.has(remainder)) {
                                                                                                // Check if the subarray length is at least 2
                                                                                                            if (i - map.get(remainder) >= 2) {
                                                                                                                            return true;
                                                                                                                                        }
                                                                                                                                                } else {
                                                                                                                                                            // Only add the remainder if it's not already in the map
                                                                                                                                                                        // We want to keep the oldest index to maximize subarray length
                                                                                                                                                                                    map.set(remainder, i);
                                                                                                                                                                                            }
                                                                                                                                                                                                }
                                                                                                                                                                                                    
                                                                                                                                                                                                        return false;
                                                                                                                                                                                                        }; 