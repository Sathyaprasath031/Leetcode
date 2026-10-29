/**
 * @param {number} lowLimit
  * @param {number} highLimit
   * @return {number}
    */
    var countBalls = function(lowLimit, highLimit) {
        // Array to store counts for each possible digit sum (max sum is 45 for 99999)
            const boxes = new Array(46).fill(0);
                let maxBalls = 0;
                
                    for (let i = lowLimit; i <= highLimit; i++) {
                            let sum = 0;
                                    let num = i;
                                            
                                                    // Calculate the sum of the digits
                                                            while (num > 0) {
                                                                        sum += num % 10;
                                                                                    num = Math.floor(num / 10);
                                                                                            }
                                                                                                    
                                                                                                            // Increment the corresponding box and update max
                                                                                                                    boxes[sum]++;
                                                                                                                            if (boxes[sum] > maxBalls) {
                                                                                                                                        maxBalls = boxes[sum];
                                                                                                                                                }
                                                                                                                                                    }
                                                                                                                                                    
                                                                                                                                                        return maxBalls;
                                                                                                                                                        }; 