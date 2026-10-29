/**
 * @param {number} n
  * @param {number} x
   * @return {boolean}
    */
    var validDigit = function(n, x) {
        const strN = n.toString();
            const strX = x.toString();
                
                    // Check if it contains the digit 'x' and does NOT start with 'x'
                        return strN.includes(strX) && strN[0] !== strX;
                        };