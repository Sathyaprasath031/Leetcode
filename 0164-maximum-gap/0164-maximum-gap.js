/**
 * @param {number[]} nums
  * @return {number}
   */
   var maximumGap = function(nums) {
       const n = nums.length;
           if (n < 2) return 0;
           
               let minVal = nums[0];
                   let maxVal = nums[0];
                   
                       for (let i = 1; i < n; i++) {
                               if (nums[i] < minVal) minVal = nums[i];
                                       if (nums[i] > maxVal) maxVal = nums[i];
                                           }
                                           
                                               if (minVal === maxVal) return 0;
                                               
                                                   // Bucket size ensures the max gap cannot fall inside a single bucket
                                                       const bucketSize = Math.max(1, Math.floor((maxVal - minVal) / (n - 1)));
                                                           const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
                                                           
                                                               const bucketsMin = new Array(bucketCount).fill(Infinity);
                                                                   const bucketsMax = new Array(bucketCount).fill(-Infinity);
                                                                   
                                                                       // Populate min and max for each bucket
                                                                           for (let i = 0; i < n; i++) {
                                                                                   const idx = Math.floor((nums[i] - minVal) / bucketSize);
                                                                                           bucketsMin[idx] = Math.min(bucketsMin[idx], nums[i]);
                                                                                                   bucketsMax[idx] = Math.max(bucketsMax[idx], nums[i]);
                                                                                                       }
                                                                                                       
                                                                                                           // Traverse buckets to find the maximum gap between adjacent non-empty buckets
                                                                                                               let maxGap = 0;
                                                                                                                   let prevMax = minVal;
                                                                                                                   
                                                                                                                       for (let i = 0; i < bucketCount; i++) {
                                                                                                                               // Skip empty buckets
                                                                                                                                       if (bucketsMin[i] === Infinity) continue;
                                                                                                                                       
                                                                                                                                               maxGap = Math.max(maxGap, bucketsMin[i] - prevMax);
                                                                                                                                                       prevMax = bucketsMax[i];
                                                                                                                                                           }
                                                                                                                                                           
                                                                                                                                                               return maxGap;
                                                                                                                                                               };