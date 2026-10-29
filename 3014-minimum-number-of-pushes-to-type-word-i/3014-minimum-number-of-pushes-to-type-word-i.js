/**
 * @param {string} word
  * @return {number}
   */
   var minimumPushes = function(word) {
       let pushes = 0;
           
               // Since all letters in the word are distinct, we just need to assign them 
                   // to the 8 available keys (2 through 9) in increasing order of cost.
                       for (let i = 0; i < word.length; i++) {
                               // The first 8 letters cost 1 push, the next 8 cost 2 pushes, and so on.
                                       pushes += Math.floor(i / 8) + 1;
                                           }
                                               
                                                   return pushes;
                                                   };