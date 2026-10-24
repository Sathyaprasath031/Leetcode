/**
 * @param {string[]} words
  * @param {character[]} letters
   * @param {number[]} score
    * @return {number}
     */
     var maxScoreWords = function(words, letters, score) {
             const letterCounts = new Array(26).fill(0);
                 for (const char of letters) {
                         letterCounts[char.charCodeAt(0) - 97]++;
                             }
                             
                                 let maxScore = 0;
                                 
                                     // Backtracking function to explore subsets
                                         const backtrack = (index, currentCounts, currentScore) => {
                                                 if (index === words.length) {
                                                             maxScore = Math.max(maxScore, currentScore);
                                                                         return;
                                                                                 }
                                                                                 
                                                                                         // Option 1: Skip the current word
                                                                                                 backtrack(index + 1, currentCounts, currentScore);
                                                                                                 
                                                                                                         // Option 2: Try to include the current word
                                                                                                                 const word = words[index];
                                                                                                                         let canForm = true;
                                                                                                                                 let wordScore = 0;
                                                                                                                                         
                                                                                                                                                 // Clone the counts to attempt forming the word
                                                                                                                                                         const tempCounts = [...currentCounts];
                                                                                                                                                         
                                                                                                                                                                 for (let i = 0; i < word.length; i++) {
                                                                                                                                                                             const charIndex = word.charCodeAt(i) - 97;
                                                                                                                                                                                         if (tempCounts[charIndex] > 0) {
                                                                                                                                                                                                         tempCounts[charIndex]--;
                                                                                                                                                                                                                         wordScore += score[charIndex];
                                                                                                                                                                                                                                     } else {
                                                                                                                                                                                                                                                     canForm = false;
                                                                                                                                                                                                                                                                     break;
                                                                                                                                                                                                                                                                                 }
                                                                                                                                                                                                                                                                                         }
                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                 // If the word can be formed, proceed with updated counts and score
                                                                                                                                                                                                                                                                                                         if (canForm) {
                                                                                                                                                                                                                                                                                                                     backtrack(index + 1, tempCounts, currentScore + wordScore);
                                                                                                                                                                                                                                                                                                                             }
                                                                                                                                                                                                                                                                                                                                 };
                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                     backtrack(0, letterCounts, 0);
                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                         return maxScore;
                                                                                                                                                                                                                                                                                                                                         }; 