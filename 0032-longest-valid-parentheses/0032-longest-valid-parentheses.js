/**
 * @param {string} s
  * @return {number}
   */
   var longestValidParentheses = function(s) {
       let maxLength = 0;
           // Start with -1 to act as the base for the first valid substring
               const stack = [-1]; 
                   
                       for (let i = 0; i < s.length; i++) {
                               if (s[i] === '(') {
                                           // Push the index of the open parenthesis
                                                       stack.push(i);
                                                               } else {
                                                                           // Pop the index of the matching open parenthesis
                                                                                       stack.pop();
                                                                                                   
                                                                                                               if (stack.length === 0) {
                                                                                                                               // If the stack is empty, this ')' is invalid.
                                                                                                                                               // Push its index to be the new base for the next valid substring.
                                                                                                                                                               stack.push(i);
                                                                                                                                                                           } else {
                                                                                                                                                                                           // The current valid substring length is current index minus the index at the top of the stack
                                                                                                                                                                                                           maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
                                                                                                                                                                                                                       }
                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                           return maxLength;
                                                                                                                                                                                                                                           }; 