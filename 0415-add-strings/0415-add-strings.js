/**
 * @param {string} num1
  * @param {string} num2
   * @return {string}
    */
    var addStrings = function(num1, num2) {
        let p1 = num1.length - 1;
            let p2 = num2.length - 1;
                let carry = 0;
                    let res = [];
                    
                        // Continue while there are digits left in either string, or if there's a leftover carry
                            while (p1 >= 0 || p2 >= 0 || carry > 0) {
                                    // Convert the current character to a number, or default to 0 if out of bounds
                                            let digit1 = p1 >= 0 ? num1[p1] - '0' : 0;
                                                    let digit2 = p2 >= 0 ? num2[p2] - '0' : 0;
                                                    
                                                            let sum = digit1 + digit2 + carry;
                                                                    carry = Math.floor(sum / 10);
                                                                            res.push(sum % 10);
                                                                            
                                                                                    p1--;
                                                                                            p2--;
                                                                                                }
                                                                                                
                                                                                                    // The digits are pushed in reverse order (ones, tens, hundreds...), so we reverse and join
                                                                                                        return res.reverse().join('');
                                                                                                        };