/**
 * @param {number[]} nums
  * @param {number} k
   * @return {number}
    */
    var smallestRangeI = function(nums, k) {
        let maxVal = Math.max(...nums);
            let minVal = Math.min(...nums);
                
                    // Decrease the maximum as much as possible and increase the minimum as much as possible.
                        // If the difference is negative, it means we can make them equal, so the score is 0.
                            return Math.max(0, maxVal - minVal - 2 * k);
                            };