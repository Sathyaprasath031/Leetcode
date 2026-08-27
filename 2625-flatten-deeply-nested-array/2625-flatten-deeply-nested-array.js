/**
 * @param {Array} arr
  * @param {number} depth
   * @return {Array}
    */
    var flat = function (arr, n) {
        const res = [];
            
                const flattenHelper = (currentArray, currentDepth) => {
                        for (let i = 0; i < currentArray.length; i++) {
                                    // If the element is an array and we haven't reached the max depth
                                                if (Array.isArray(currentArray[i]) && currentDepth < n) {
                                                                // Recursively flatten the nested array
                                                                                flattenHelper(currentArray[i], currentDepth + 1);
                                                                                            } else {
                                                                                                            // Otherwise, push the element as is
                                                                                                                            res.push(currentArray[i]);
                                                                                                                                        }
                                                                                                                                                }
                                                                                                                                                    };
                                                                                                                                                        
                                                                                                                                                            // Start the recursion with the original array at depth 0
                                                                                                                                                                flattenHelper(arr, 0);
                                                                                                                                                                    
                                                                                                                                                                        return res;
                                                                                                                                                                        };