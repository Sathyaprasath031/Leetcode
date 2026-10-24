/**
 * @param {string} s
  * @return {number}
   */
   var maxProduct = function(s) {
       const n = s.length;
           const palindromes = [];
           
               // Helper to check if a string is a palindrome
                   const isPalindrome = (str) => {
                           let left = 0, right = str.length - 1;
                                   while (left < right) {
                                               if (str[left] !== str[right]) return false;
                                                           left++;
                                                                       right--;
                                                                               }
                                                                                       return true;
                                                                                           };
                                                                                           
                                                                                               // 1. Generate all subsequences using bitmasks
                                                                                                   for (let mask = 1; mask < (1 << n); mask++) {
                                                                                                           let subseq = "";
                                                                                                                   for (let i = 0; i < n; i++) {
                                                                                                                               if ((mask & (1 << i)) !== 0) {
                                                                                                                                               subseq += s[i];
                                                                                                                                                           }
                                                                                                                                                                   }
                                                                                                                                                                           // Store the mask and length if it's a palindrome
                                                                                                                                                                                   if (isPalindrome(subseq)) {
                                                                                                                                                                                               palindromes.push({ mask: mask, length: subseq.length });
                                                                                                                                                                                                       }
                                                                                                                                                                                                           }
                                                                                                                                                                                                           
                                                                                                                                                                                                               let maxProd = 0;
                                                                                                                                                                                                                   const len = palindromes.length;
                                                                                                                                                                                                                   
                                                                                                                                                                                                                       // 2. Compare all pairs to find the max product of disjoint subsequences
                                                                                                                                                                                                                           for (let i = 0; i < len; i++) {
                                                                                                                                                                                                                                   for (let j = i + 1; j < len; j++) {
                                                                                                                                                                                                                                               // Check if disjoint using bitwise AND
                                                                                                                                                                                                                                                           if ((palindromes[i].mask & palindromes[j].mask) === 0) {
                                                                                                                                                                                                                                                                           maxProd = Math.max(maxProd, palindromes[i].length * palindromes[j].length);
                                                                                                                                                                                                                                                                                       }
                                                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                       return maxProd;
                                                                                                                                                                                                                                                                                                       }; 